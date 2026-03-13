import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { config } from "./config.js";

passport.use(
  new GoogleStrategy(
    {
      clientID: config.GOOGLE_CLIENT_ID,
      clientSecret: config.GOOGLE_CLIENT_SECRET,
      callbackURL: config.GOOGLE_CALLBACK_URL,
    },

    async (accessToken, refreshToke, profile, done) => {
      try {
        const adminData = {
          name: profile.displayName,
          email: profile.emails[0].value,
          googleId: profile.id,
          imageUrl: profile.photos?.[0]?.value,
          provider: "google",
          role: "Admin",
        };

        return done(null, adminData);
      } catch (error) {
        return done(error, null);
      }
    },
  ),
);

export default passport;
