import express from "express";
import personaRouter from "./routes/persona.router";
import auxiliarRouter from "./routes/auxiliar.router";
import loginRouter from "./routes/login.router";
import indemnizacionRouter from "./routes/indemnizacion.router";

const app = express();
const cors = require("cors");
const port = 4000;

app.use(cors());
app.use(express.json());
app.use("/api/persona", personaRouter);
app.use("/api/auxiliar", auxiliarRouter);
app.use("/api/indemnizacion", indemnizacionRouter);
app.use("/login", loginRouter);



app.listen(port, () => {
  console.log(`El servidor esta escuchando el puerto ${port}`);
});
