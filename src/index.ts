import  express  from "express";
import type { Request, Response } from "express";
import dotenv from 'dotenv';
import authRouter from "./routes/auth";
dotenv.config();
import { join } from "path";


const app = express();
const port = process.env.PORT;


// middleware config
app.use(express.json());
app.use(express.static(join(__dirname, 'views')));


 // Routes
app.get('/', (req:Request, res:Response) => {
    res.sendFile(join(__dirname,'views','index.html'))
})

app.use('/auth', authRouter)

 //Creating a server
app.listen(port , () => {
    console.log(`Server running at http://localhost:${port}/`)
})