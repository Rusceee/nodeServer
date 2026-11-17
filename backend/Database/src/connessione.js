const express = require('express');
const path = require('path');
const Animale = require('../Modelli/animale');
const mongoose = require('mongoose')
var bodyParser = require('body-parser');
const env = require("../config/env.js");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//script copiato da mongo atlas alla voce connect
const url = env.MONGODB_URL || env.MONGODB_URI;

mongoose.connect(url)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })



