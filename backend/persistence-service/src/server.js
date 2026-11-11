const path = require("path");                    // Importa il modulo per gestire i percorsi dei file.
require("dotenv").config({ path: path.resolve(__dirname, "../.env") }); // Carica le variabili d'ambiente dal file .env.
const express = require("express");              // Importa il framework Express.
const env = require("../config/env");            // Importa la configurazione dell'ambiente.
const paths = require("../config/paths");        // Importa i percorsi del servizio.
const persistenceRoutes = require("./routes/persistenceRoutes"); // Importa le route del servizio.

const app = express();                           // Crea l'applicazione Express.
const PORT = env.PORT;                           // Porta del servizio.

// Serve i file immagine dalla cartella images
app.use("/images", express.static(paths.IMAGES));

// Route del servizio persistence
app.use("/", persistenceRoutes);

app.listen(PORT, () => {                         // Avvia il server sulla porta definita.
    console.log(`Persistence Service avviato sulla porta ${PORT}`);
});

