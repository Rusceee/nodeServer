const express = require("express");
const path = require("path");
const fs = require("fs");
const paths = require("../../config/paths");

const router = express.Router();

// GET /api/picture — Restituisce il JSON con il percorso dell'immagine.
// L'immagine deve essere nella cartella backend/persistence-service/images/
// Supporta: .png, .jpg, .jpeg, .gif, .webp
router.get("/api/picture", (req, res) => {
    const imagesDir = paths.IMAGES;

    // Estensioni supportate
    const supportedExtensions = [".png", ".jpg", ".jpeg", ".gif", ".webp"];

    try {
        // Controlla se la cartella images esiste
        if (!fs.existsSync(imagesDir)) {
            return res.status(404).json({
                error: "Cartella immagini non trovata. Aggiungi un'immagine nella cartella images/"
            });
        }

        // Cerca il primo file immagine nella cartella
        const files = fs.readdirSync(imagesDir);
        const imageFile = files.find(file => {
            const ext = path.extname(file).toLowerCase();
            return supportedExtensions.includes(ext);
        });

        if (!imageFile) {
            return res.status(404).json({
                error: "Nessuna immagine trovata. Aggiungi un file .png, .jpg, .jpeg, .gif o .webp nella cartella images/"
            });
        }

        // Restituisce il JSON con il percorso dell'immagine
        res.json({
            success: true,
            image: `/api/v1/persistence/images/${imageFile}`,
            filename: imageFile
        });

    } catch (err) {
        console.error("Errore nel leggere le immagini:", err);
        res.status(500).json({ error: "Errore interno del server" });
    }
});

module.exports = router;

