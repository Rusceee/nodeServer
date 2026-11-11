//gestisce e valida le variabili d'ambiente --> sicurezza che e
require("dotenv").config();

// Lista delle variabili obbligatorie
const requiredVars = ["PORT"];

// Controllo che tutte le variabili siano presenti
requiredVars.forEach(key => {
    if (!process.env[key]) {
        console.error(`La variabile ${key} non è definita nel file .env`);
        process.exit(1); // blocca l'avvio del server
    }
});

// Esporto le variabili già validate
module.exports = {
    PORT: parseInt(process.env.PORT, 10)
};

