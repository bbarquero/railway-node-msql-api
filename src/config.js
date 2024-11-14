import { config } from "dotenv";

config();
//objeto process de nodejs
/*asi leo variable de entorno del computador
console.log(process.env.PORT);
console.log(process.env.DB_HOST);
console.log(process.env.DB_USER);
console.log(process.env.DB_PASSWORD);
console.log(process.env.DB_DATABASE);*/

//PORT EN MAYUS ES UNA CONSTANTE
// esto es solo para desarrollo

export const PORT = process.env.PORT || 3000; //Servidor
export const DB_USER = process.env.DB_USER || "root";
export const DB_PASSWORD = process.env.DB_PASSWORD || "LocalSion25.";
export const DB_HOST = process.env.DB_HOST || "Localhost";
export const DB_DATABASE = process.env.DB_DATABASE || "companydb";

//Puerto base datos,
export const DB_PORT = process.env.DB_PORT || 3306;

//
