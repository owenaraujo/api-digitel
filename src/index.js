const express = require("express");
const morgan = require("morgan");




const app = express();
require("./lib/passport");
app.set("port", process.env.PORT || 3000);


app.use(express.json());
require("dotenv").config();
// configuraciones
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));



// rutas


app.use("/api/locacion", require("./routes/locacion"));
app.use("/api/cliente", require("./routes/cliente"));

// public

app.use((req, res) => {
  res.status(404).send("error");
});

app.listen(app.get("port"), () => {
  console.log("server is in port", app.get("port"));
});
