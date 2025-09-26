const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Connexion à la base de données
mongoose.connect('mongodb://localhost:27017/retours-utilisateurs', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connecté à la base de données avec succès'))
  .catch(err => console.error('Erreur de connexion :', err));

app.get('/', (req, res) => {
  res.send('Bienvenue sur l\'application de récupération des retours utilisateurs!');
});

app.listen(PORT, () => {
  console.log(`Serveur en cours d\'exécution sur le port ${PORT}`);
});