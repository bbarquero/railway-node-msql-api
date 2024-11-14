import {pool} from '../db.js';


export const ping = async (req, res) => {
  const [result] = await  pool.query('Select "pong" as result'); //[] extraer una parte
  res.json(result[0]); // [0] sin el arreglo , solo el objecto
 };