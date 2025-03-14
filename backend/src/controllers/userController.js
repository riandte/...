const pool = require('../db.cjs');

const getUsers = async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM usuarios');
    res.json(rows);
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    res.status(500).send('Erro no servidor');
  }
};

module.exports = {
  getUsers,
};