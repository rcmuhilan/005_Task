import { Router } from "express";
import type { NextFunction, Request, Response } from "express";
import passport from "passport";

const authRouter = Router();

authRouter.get('/google', passport.authenticate('google'), (req:Request, res:Response, next:NextFunction) => {
    res.status(200).send('Hi')
})

authRouter.get('/google/redirect', passport.authenticate('google'),(req:Request, res:Response, next:NextFunction) => {
    res.status(200).send('Hi')
})

export default authRouter;