const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  utilisateur: { type: String, required: true },
  commentaires: { type: String, required: true },
  note: { type: Number, required: true, min: 1, max: 5 },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Feedback', feedbackSchema);