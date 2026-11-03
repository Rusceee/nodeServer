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
    failureRedirect: "http://localhost:4000/api/v1/login",
  }),
  (req, res) => {
    console.log("Utente autenticato con Google:", req.user);
    // Redirige al frontend con il nome dell'utente come query parameter.
    const userName = encodeURIComponent(req.user.displayName);
    res.redirect(`http://localhost:4000/api/v1?googleUser=${userName}`);
  }
);

// Route di logout.
router.get("/logout", (req, res) => {
  req.logout(() => {
    res.redirect("http://localhost:4000/api/v1");
  });
});

module.exports = router;
