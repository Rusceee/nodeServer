const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const env = require("./env");

passport.use(
  new GoogleStrategy(
    {
      clientID: env.client_id,
      clientSecret: env.client_secret,
      callbackURL: "http://localhost:3001/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const user = {
          googleID: profile.id,
          displayName: profile.displayName,
          email: profile.emails?.[0]?.value,
        };
        return done(null, user);
      } catch (err) {
        return done(err, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

module.exports = passport;
