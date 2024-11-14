//Ecma script modules , agregar al package json type:module
import express from "express";

import employeesRoutes from "./routes/employees.routes.js";
import indexRoutes from "./routes/index.routes.js";

//import { PORT } from "./config.js";

const app = express();

app.use(express.json()); // antes de las rutas, metodo json recibe datos y convierte .para interpretar los valores, entiende los JSON.

app.use(indexRoutes);
app.use("/api", employeesRoutes); //interponer a todas las rutas : http://localhost:3000/api/employees

//Si no coincide la ruta api/xxxxxxxxxxxxxxxxxxxxxxxxxxxxx que no me muestre html, sino un msj
//Si la ruta no existe
//Función middleware (req, res)
app.use((req, res, next) => {
  res.status(404).json({
    message: "endpoint not found",
  });
});


export default app;