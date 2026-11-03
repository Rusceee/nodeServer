const express = require("express");
const passport = require("passport");

const router = express.Router();

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "http://localhost:4000/api/v1/login.html",
  }),
  (req, res) => {
    console.log("Utente autenticato con Google:", req.user);
    res.json(req.user);
  }
);

module.exports = router;
