import { pool } from "../db.js";

export const getEmployees = async (req, res) => {
  //JS podemos crear nuestros propios errores, Manejo de errores por si falla la conexion a la bd
  //throw new Error('My error')

  try {
    //throw new Error('DB ERROR')
    const [rows] = await pool.query("SELECT * FROM employee");
    res.json(rows); // No hace falta que sea entre {} porque ya es un arreglo.
  } catch (error) {
    //codigo 500 no mucha info al cliente
    return res.status(500).json({
      message: "something goes wrong",
    });
  }
};

export const getEmployeesId = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [
      req.params.id,
    ]); //Sin el id me trae toda la info
    //res.json(rows); // No hace falta que sea entre {} porque ya es un arreglo.
    //console.log(req.params.id); Obtengo el id de params
    if (rows.length <= 0)
      return res.status(404).json({
        message: "Employee not found", // si no se encuentra el id , enviar ese mensaje
      });

    //console.log(rows); lo veo en la pantalla de abajo, cuando envío desde el navegador
    //res.send('OBTIENDO EMPLEADO');
    res.json(rows[0]); // lo veo en el navegador en formato JSON (Json viewer) sin 0 obtengo el arreglo
  } catch (error) {
    return res.status(500).json({
      message: "something goes wrong",
    });
  }
};

//Operacion con bd siempre asincrona await
export const createEmployees = async (req, res) => {
  const { name, salary } = req.body;
  try {
    const [rows] = await pool.query(
      "INSERT INTO employee(name, salary) VALUES(?,?)",
      [name, salary]
    ); // VALUES(?,?)' DO RIGHT
    //Puedo agregar funciones que validen si es un string o numero, si esta vacío o no.
    res.send({
      id: rows.insertId, // trae mas valores. rows. xxxx , ocupaba ID
      name,
      salary,
    }); // entre llaves para que lo pueda devolver como objeto JSON()
  } catch (error) {
    return res.status(500).json({
      message: "something goes wrong",
    });
  }
};

export const deleteEmployees = async (req, res) => {
  try {
    const [result] = await pool.query("Delete from employee Where id=?", [
      req.params.id,
    ]);

    if (result.affectedRows <= 0)
      return res.status(404).json({ message: "Employee not found" });

    //console.log(result);
    res.sendStatus(204); // Todo salió bien.
  } catch (error) {
    return res.status(500).json({
      message: "something goes wrong",
    });
  }
};

export const updateEmployees = async (req, res) => {
  const { id } = req.params;
  const { name, salary } = req.body;
  //console.log(id,name, salary)

  try {
    // IFNULL funcion de mysql2 , si esta vacío dejar el valor que estaba.
    const [result] = await pool.query(
      "UPDATE employee SET name = IFNULL(?,name), salary = IFNULL(?,salary) WHERE id = ?",
      [name, salary, id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({
        message: "Employee not found",
      });

    //Cuando encuentra datos me devuelve rows
    const [rows] = await pool.query("Select * from employee WHERE id = ?", [
      id,
    ]);

    res.json(rows[0]);
    //console.log(rows[0])// solo quiero el primer elemento, no un arreglo[0], solo quiero un objeto
  } catch (error) {
    return res.status(500).json({
      message: "something goes wrong",
    });
  }
};
