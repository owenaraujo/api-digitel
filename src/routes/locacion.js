const express = require("express");
const router = express.Router();
const pool = require("../database");
const app = express();



// consulta estado
router.get("/estados", async (req, res) => {
  const estados = await pool.query(`select * from estados`);

  res.json(estados);
});
router.get("/estados/:id", async (req, res) => {
  const { id } = req.params;
  const estados = await pool.query(
    `select estado from estados where id_estado= ${id}`
  );

  res.json(estados);
});
// consulta estado
// consulta municipio
router.get("/municipio/:id", async (req, res) => {
  const { id } = req.params;
  const municipios = await pool.query(
    "select * from municipios where id_municipio=?",
    [id]
  );

  res.json(municipios);
});
router.get("/municipio/", async (req, res) => {
  console.log("hola");
});
router.get("/municipios/:id", async (req, res) => {
  const { id } = req.params;
  const municipios = await pool.query(
    "select * from municipios where id_estado=?",
    [id]
  );

  res.json(municipios);
});
router.get("/visitas/municipios/:id", async (req, res) => {
  const { id } = req.params;
  const municipios = await pool.query(
    `select * from municipios where id_municipio= ${id}`
  );

  res.json(municipios);
});
// consulta municipio
// consulta parroquia
router.get("/parroquia/:id", async (req, res) => {
  const { id } = req.params;
  const parroquia = await pool.query(
    `select * from parroquias where id_municipio=?`,
    [id]
  );

  res.json(parroquia);
});
router.get("/visitas/parroquia/:id", async (req, res) => {
  const { id } = req.params;
  const parroquias = await pool.query(
    `select * from parroquias where id_parroquia=?`,
    [id]
  );

  res.json(parroquias);
});

// consulta parroquia
// search contribuyente

// search contribuyente
module.exports = router;
app;
