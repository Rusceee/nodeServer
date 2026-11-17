const mongoose = require("mongoose"); // Usa il mongoose del service (quello con la connessione attiva).

// Definisce lo schema localmente per usare la stessa istanza mongoose connessa.
const AnimaleSchema = new mongoose.Schema({
  nome:        { type: String,  required: true },
  presente:    { type: Boolean, default: true },
  datacquisto: { type: Date,    default: Date.now }
});

// Riusa il modello se già registrato, altrimenti lo crea.
const Animale = mongoose.models.animale || mongoose.model("animale", AnimaleSchema);

exports.databaseController = async (req, res) => {
  try {
    const nomeanimale = String(req.body?.nome || "").trim();

    if (!nomeanimale) {
      return res.status(400).send("Nome animale mancante.");
    }

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
};