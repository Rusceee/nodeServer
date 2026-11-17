const express = require('express');
const path = require('path');
const Animale = require('./Modelli/animale');
const mongoose = require('mongoose')
var bodyParser = require('body-parser');
// const env = require("config/env.js");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//script copiato da mongo atlas alla voce connect
const url = "mongodb+srv://andreasilvanoruscellistud_db_user:JG2jBd2BD8VB5DHl@esercizionode.6mdtxti.mongodb.net"

mongoose.connect(url)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })

const newAnimale = new Animale({
    nome: 'Cane',
    presente: true
});

app.post("/", async function(req, res) {
  try {
    const nomeanimale = String(req.body.nome).trim();

    // Spedizione prompt (console)
    console.log(nomeanimale);

    // Spedizione MongoDB
    const newAnimale = new Animale({
      nome: nomeanimale,
      presente: true
    });

    const item = await newAnimale.save();
    console.log("Salvato su MongoDB:", item);

    // Spedizione risposta al browser dopo il salvataggio
    res.send(`Animale "${nomeanimale}" salvato con successo!`);
  } catch (err) {
    console.error("Errore durante il salvataggio:", err);
    res.status(500).send("Errore durante il salvataggio nel database.");
  }
});



newAnimale
.save()
.then(item => console.log('Animale salvato nel database:', item))
.catch(err => console.error('Errore durante il salvataggio dell\'animale:', err));