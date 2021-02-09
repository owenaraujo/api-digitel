const express = require("express");
const router = express.Router();
const pool = require("../database");

const app = express();
router.get("/searchCliente/:data", async (req, res) => {
  const { data } = req.params;
  const search = await pool.query(
    `select * from clientes where cedula LIKE '%${data}%' or nombre like '${data}%'`
  );

  res.json(search);
});
router.get("/", async (req, res) => {
  const clientes = await pool.query(
    "select * from clientes order by cedula"
  );
  res.json(clientes);
});
router.get("/cedula/:cedula", async (req, res) => {
  const {cedula}= req.params
  const clientes = await pool.query(
    "select * from clientes where cedula=?", cedula
  );
  res.json(clientes);
});
router.post("/", async (req, res) => {
 try {
  const {
    cedula,
    nombre,
    apellido,
    sexo,
    nacimiento,
    telefono,
    telefono_local,
    direccion_1,
    direccion_2,
    direccion_3,
    estado,
    municipio,
    parroquia,
    postal,
  } = req.body;
  const cliente = {
    cedula,
    nombre,
    apellido,
    sexo,
    nacimiento,
    telefono,
    telefono_local,
    direccion_1,
    direccion_2,
    direccion_3,
    estado,
    municipio,
    parroquia,
    postal,
  };
    await pool.query("insert into clientes set ?", [cliente]);
  const clienteNuevo= await pool.query('select * from clientes where cedula=?', cedula)
  res.json(clienteNuevo);
 } catch (error) {
   console.log('hubo un error' + error);
 }
});
router.put("/edit/:id", async (req, res) => {
  const { id } = req.params;
  const { contribuyente, rif } = req.body;
  const send = await pool.query(
    "update  clientes set nombre = ?, cedula = ? where id= ? limit 1",
    [contribuyente, rif, id]
  );
  res.json(send);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const borrar = await pool.query("delete  from clientes where id =?", [
    id,
  ]);
  res.json(borrar);
});
module.exports = router;
app;

