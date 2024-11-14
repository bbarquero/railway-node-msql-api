import { createPool } from "mysql2/promise"; //Agrego /promise para usar async await


import { DB_HOST, DB_PORT , DB_DATABASE, DB_USER, DB_PASSWORD} from "./config.js";
//Conjunto de conexiones para desarrollo esta bien pero para producción no 
export const pool = createPool({
  host: DB_HOST, // si tuviera en la servicio nube 127.x, yo trabajo local
  user:DB_USER,
  password:DB_PASSWORD,
  port:DB_PORT,
  database:DB_DATABASE
});

// variables de entorno para produccion -- modulo npm i dotenv ( leer un archivo .env --guarda variarbles de entorno)
//https://www.youtube.com/watch?v=3dSkc-DIM74
// 1:50