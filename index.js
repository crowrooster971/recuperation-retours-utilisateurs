const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Connect to the database
mongoose.connect('mongodb://localhost:27017/user-feedback', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Successfully connected to the database'))
  .catch(err => console.error('Connection error:', err));

app.get('/', (req, res) => {
  res.send('Bienvenue sur l\'application de récupération des retours utilisateurs!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});