import passport from "passport";
import { Strategy as GoogleStrategy, Profile, VerifyCallback} from "passport-google-oauth20";


passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    callbackURL: process.env.GOOGLE_REDIRECT_URL!,
}, async (accessToken: string, refreshToken: string, profile: Profile, done: VerifyCallback) => {
    const user: Express.User = {
        id: profile.id,
        displayName: profile.displayName,
        email: profile.emails?.[0].value,
        photos: profile.photos,
    };
    console.log('accestoken:' + accessToken)
    console.log('refreshToken:' + refreshToken)
    console.log(user)
    done(null, user)
}))

passport.serializeUser((user, done) =>{
    done(null, user.id)
})

passport.deserializeUser((id:string, done: VerifyCallback) => {
    if (!id) {
        console.log('User not verified')
    }
    console.log('Verified User')
})