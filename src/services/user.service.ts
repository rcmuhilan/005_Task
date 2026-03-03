import pool from "../data/db";
import { randomUUID } from 'crypto';
import bcrypt from 'bcrypt';

export async function findOrCreateUser(user: Express.User | undefined): Promise<Express.User | undefined> {
    const {
        uid,
        email,
        name,
        picture,
        firebase
    } = user as Express.User

    const provider = firebase?.sign_in_provider;

    // check user existing
    const existing = await pool.query(
        "SELECT * FROM users WHERE firebase_uid = $1", [uid]
    );

    if (existing.rows.length > 0) {
        await pool.query(
            "UPDATE users SET last_login_at = NOW() WHERE firebase_uid = $1", [uid]
        )
        console.log(`User ${existing.rows[0].name} already exist!`)
        return existing.rows[0]
    };

    
    // update user if not exist
    const updatedUser = await pool.query(
        "INSERT INTO users(firebase_uid, email, name, photo_url, provider, auth_type, last_login_at) VALUES ($1,$2,$3,$4,$5,'firebase',NOW()) RETURNING *", [uid, email, name, picture, provider]
    );
    console.log(`User ${updatedUser.rows[0].name} created Successfully`)
    return updatedUser.rows[0];

}

export async function registerUser(username: string, email: string, password: string) {
    // 1. Check if user exists
    const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    if (user.rows.length > 0) {
        throw new Error(`User is already logged using firebase: ${user.rows[0].provider} using ${user.rows[0].email}`); // User might have signed up via Social Login only
    } 

    // 2. Hash password (using bcrypt)
    const hashedPassword = await bcrypt.hash(password, 10);
    const uid = randomUUID(); // Generate a UID for our custom auth

    // 3. Insert into DB (Assuming you added a 'password' column to your users table)
    const newUser = await pool.query(
        "INSERT INTO users(firebase_uid, email, password, name, provider, auth_type, last_login_at) VALUES ($1, $2, $3, $4, 'muhilan', 'custom', NOW()) RETURNING *",
        [uid, email, hashedPassword, username]
    );
    return newUser.rows[0];
}

export async function loginUser(username: string, email: string, password: string) {
    const result = await pool.query("SELECT * FROM users WHERE (email = $1 AND name = $2)", [email, username]);
    const user = result.rows[0];
    if (result.rows.length === 0) throw new Error('No User Credentials found Register first');
    if (user.password === 'firebase-login') throw new Error(`User is already logged using firebase: ${user.provider} using ${user.email}`); // User might have signed up via Social Login only

    const match = await bcrypt.compare(password, user.password);
    if (match) {
        await pool.query("UPDATE users SET last_login_at = NOW() WHERE email = $1", [email]);
        return user;
    }
    return user;
}