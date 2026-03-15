import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { config } from "./config.js";

passport.use(
  "google-register",
  new GoogleStrategy(
    {
      clientID: config.GOOGLE_CLIENT_ID,
      clientSecret: config.GOOGLE_CLIENT_SECRET,
      callbackURL: config.GOOGLE_CALLBACK_URL,
    },

    async (accessToken, refreshToken, profile, done) => {
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

passport.use(
  "google-login",
  new GoogleStrategy(
    {
      clientID: config.GOOGLE_CLIENT_ID,
      clientSecret: config.GOOGLE_CLIENT_SECRET,
      callbackURL: config.GOOGLE_LOGIN_CALLBACK_URL, // Uses .env GOOGLE_LOGIN_CALLBACK_URL for local and GOOGLE_LOGIN_CALLBACK_LIVE_URL for production
    },
    async (accessToken, refreshToken, profile, done) => {
      const adminData = {
        name: profile.displayName,
        email: profile.emails[0].value,
        googleId: profile.id,
        imageUrl: profile.photos?.[0]?.value,
        provider: "google",
        role: "Admin",
      };

      return done(null, adminData);
    }
  )
);

export default passport;
