import { Router } from "express";
import type { NextFunction, Request, Response } from "express";
import { firebaseAuth } from "../middlewares/firebaseAuth";
import { findOrCreateUser, registerUser, loginUser } from "../services/user.service";

declare global {
  namespace Express {
    interface User {
      uid?: string;
      email?: string;
      name?:string;
      picture?:string;
      provider?:string;
      firebase?: {
        identities: {
          [key: string]: any[];
        };
        sign_in_provider: string;
      };
    }
    interface Request {
      user?: User;
    }
  }
}

const authRouter = Router();


authRouter.get('/firebase', firebaseAuth, async (req: Request, res: Response) => {
    const user = req.user;
    console.log(user)
    const dbUser = await findOrCreateUser(user)
  res.send(`${dbUser?.name} Login Successfully Using Firebase: ${dbUser?.provider}`)
})

authRouter.post('/register', async (req: Request, res: Response) => {
    const { username, email, password } = req.body;
    try {
        const user = await registerUser(username, email, password);
        console.log(user);
        res.json({
          message:`${user.name} Registered Successfully Using: ${user?.provider}`,
        })
    } catch (error: any) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
});

authRouter.post('/login', async (req: Request, res: Response) => {
    const { username, email, password } = req.body;
    try {
        const user = await loginUser(username, email, password);
        console.log(user);
        res.json({
          message:`${user.name} Login Successfully Using: ${user?.provider}`,
        })
    } catch (error: any) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

export default authRouter;