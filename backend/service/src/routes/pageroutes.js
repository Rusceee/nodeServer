//raccolgo qui tutte le routes delle pages, ossia i percorsi utili per gestire l'invio delle pagine statiche
//in altri termini tutti i get saranno raccolti qui

const express = require("express");
const router = express.Router();
const path = require("path");
const paths = require("../../config/paths"); // Importa i percorsi definiti in paths.js

router.get("/", (req, res) => {
    res.sendFile(path.join(paths.PUBLIC, "index.html"));
});

router.get("/login", (req, res) => {
    res.sendFile(path.join(paths.PUBLIC, "login.html"));
});

router.get("/about", (req, res) => {
    res.sendFile(path.join(paths.PUBLIC, "about.html"));
});

router.get("/signup", (req, res) => {
    res.sendFile(path.join(paths.PUBLIC, "  signup.html"));
});

router.get("/weather", (req, res) => {
    res.sendFile(path.join(paths.PUBLIC, "weather.html"));
});

router.get("/contact", (req, res) => {
    res.sendFile(path.join(paths.PUBLIC, "contact.html"));
});

router.get("/wanted", (req, res) => {
    res.sendFile(path.join(paths.PUBLIC, "fbi.html"));
});


module.exports = router;
