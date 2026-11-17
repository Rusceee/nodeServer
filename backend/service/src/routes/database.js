const express = require("express");
const router = express.Router();
const {databaseController} = require("../controllers/databaseController"); // Importa il controller per gestire le richieste

    
// Definisce la route POST per ottenere le informazioni meteo di una città.
router.post("/database", databaseController);

module.exports = router;