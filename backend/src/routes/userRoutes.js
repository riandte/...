// src/routes/userRoutes.js
const express = require('express');
const { getUsers } = require('../controllers/userController');

const router = express.Router();

// Rota para buscar usuários
router.get('/usuarios', getUsers);

module.exports = router;