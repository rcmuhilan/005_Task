import  express  from "express";
import type { Request, Response } from "express";
import dotenv from 'dotenv';
import passport from "passport";
import authRouter from "./routes/auth";
dotenv.config();
require('./strategies/google');
const session = require('express-session')
const store = new session.MemoryStore();
import { join } from 'path';
import cors  from 'cors';

const app = express();
const port = process.env.PORT;


// middleware config
app.use(express.json());
app.use(
    session({
        secret:'muhilansecret',
        resave:false,
        saveUninitialized: false,
        store
    })
)
app.use(passport.initialize());
app.use(passport.session())
app.use(cors())


 // Routes
app.get('/', (req:Request, res:Response) => {
    res.sendFile(join(__dirname,'views','index.html'))
})

app.use('/auth', authRouter)

 //Creating a server
app.listen(port , () => {
    console.log(`Server running at http://localhost:${port}/`)
})