const path = require('path');
const env = require("../config/env.js");

// Esporta una funzione che connette a MongoDB usando l'istanza mongoose ricevuta.
// In questo modo il chiamante (es. server.js) passa il proprio mongoose,
// evitando il problema di due istanze separate.
module.exports = function connetti(mongoose) {
    const url = env.MONGODB_URL || env.MONGODB_URI;

    return mongoose.connect(url)
        .then(() => {
            console.log('Connected to the database');
        })
        .catch((err) => {
            console.error(`Error connecting to the database.\n${err}`);
        });
};

