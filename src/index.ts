import  express  from "express";
import type { Request, Response } from "express";
import dotenv from 'dotenv';
import passport from "passport";
import authRouter from "./routes/auth";
dotenv.config();
require('./strategies/google');

const app = express();
const port = process.env.PORT;


 // Routes
app.get('/', (req:Request, res:Response) => {
    res.send('Hello Muhilan!')
})

app.use('/auth', authRouter)


 //Creating a server
app.listen(port , () => {
    console.log(`Server running at http://localhost:${port}/`)
})