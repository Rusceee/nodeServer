const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnimaleSchema = new Schema({
  nome: {
    type: String,
    required: true
  },
  presente: {
    type: Boolean,
    default: true
  },
  datacquisto: {
    type: Date,
    default: Date.now()
  }
});

module.exports = Item = mongoose.model('animale', AnimaleSchema);