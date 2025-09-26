const express = require('express');
const Feedback = require('../models/feedback');
const router = express.Router();

// Route pour créer un nouveau retour
router.post('/', async (req, res) => {
  const feedback = new Feedback(req.body);
  try {
    await feedback.save();
    res.status(201).send(feedback);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Route pour récupérer tous les retours
router.get('/', async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.status(200).send(feedbacks);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
