import { Router } from "express";
import type { NextFunction, Request, Response } from "express";
import passport from "passport";
import { firebaseAuth } from "../middlewares/firebaseAuth";

declare global {
  namespace Express {
    interface User {
      uid?: string;
      email?: string;
      id?: string;
      displayName?: string;
      emails?: Array<{ value: string }>;
      photos?: Array<{ value: string }>;
    }
  }
}

const authRouter = Router();

authRouter.get('/google', passport.authenticate('google', {
    scope: ['email', 'profile'],
    accessType: "offline",
    prompt: "consent"
}), (req:Request, res:Response, next:NextFunction) => {
    res.status(200).send('Hi')
})

authRouter.get('/google/redirect', passport.authenticate('google', {
    failureRedirect: '/auth/google',
  }), (req: Request, res: Response) => {
    res.send('Login Successfully Using Google')
  })


authRouter.get('/profile', firebaseAuth, (req: Request, res: Response) => {
    const user = req.user;
    console.log(user)
    console.log({
    uid: user?.uid,
    email: user?.email,
  });
  res.send('Login Successfully Using Firebase')
})

export default authRouter;