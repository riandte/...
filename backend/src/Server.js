import express from "express";
import "dotenv/config";

const app = express();
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3000;
console.log(`Servidor rodando na porta ${PORT}`);

app.get("/", (req, res) => {
  res.send("Servidor rodando...");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
