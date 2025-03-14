// src/routes/index.js
const express = require('express');
const router = express.Router();

// Rota raiz
router.get('/', (req, res) => {
  res.send('Bem-vindo ao ContratosControl!');
});

module.exports = router;