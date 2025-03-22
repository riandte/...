import express from 'express';
import pool from './db.js';
import cors from 'cors';

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());


app.use(express.json())

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});


app.get("/grupoclientes", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM gruposclientes");
    res.json(result.rows);
  } catch (error) {
    console.error("Erro ao buscar grupos de clientes:", error);
    res.status(500).send("Erro no servidor");
  }
})

app.post("/grupoclientes", async (req, res) => {
  const { nomeGrupo } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO gruposclientes (nome_grupo) VALUES ($1) RETURNING *",
      [nomeGrupo]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Erro ao criar grupo de clientes:", error);
    res.status(500).send("Erro no servidor");
  }
});

app.put("/grupoclientes/:idGrupoCliente", async (req, res) => {
  const { idGrupoCliente } = req.params;
  const { nomeGrupo } = req.body;

  try {
    const result = await pool.query(
      "UPDATE gruposclientes SET nome_grupo = $1 WHERE id_grupo_cliente = $2 RETURNING *",
      [nomeGrupo, idGrupoCliente]
    );
  if (result.rows.length === 0) {
      return res.status(404).json({ error: "Grupo não encontrado" });
    }
    res.status(200).json({ 
      message: "Grupo de clientes atualizado com sucesso!", 
      updatedGroup: result.rows[0] });
  } catch (error) {
    console.error("Erro ao atualizar grupo de clientes:", error);
    res.status(500).send("Erro no servidor");
  }
});

app.delete("/grupoclientes/:idGrupoCliente", async (req, res) => {
  const { idGrupoCliente } = req.params;;

  try {
    const result = await pool.query(
      "DELETE FROM gruposclientes WHERE id_grupo_cliente = $1 RETURNING *",
      [idGrupoCliente]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Grupo não encontrado" });
      }
    res.status(204).json({message: "Grupo de clientes deletado com sucesso"});
  } catch (error) {
    console.error("Erro ao apagar grupo de clientes:", error);
    res.status(500).send("Erro no servidor");
  }
});