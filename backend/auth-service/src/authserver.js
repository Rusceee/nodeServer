const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const express = require("express");
const session = require("express-session");
const env = require("../config/env");
const passport = require("../config/passport");
const googleAuthRoutes = require("./routes/authRoutes.js");

const app = express();
const PORT = env.port;

app.use(
    session({
        secret: "super-secret-key",
        resave: false,
        saveUninitialized: false,
    })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/", googleAuthRoutes);

app.listen(PORT, () => {
    console.log(`Auth Service avviato sulla porta ${PORT}`);
});
