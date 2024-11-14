import { Router } from "express";
import {
  getEmployees,
  createEmployees,
  updateEmployees,
  deleteEmployees, getEmployeesId
} from "../Controllers/employees.controllers.js";

const router = Router();

//Endpoints , rutas
router.get("/employees", getEmployees);

router.get("/employees/:id", getEmployeesId);

router.post("/employees", createEmployees);

// put si voy actualizar todos campos asi slo dice res
//router.put("/employees/:id", updateEmployees);

// patch si voy actualizar uno de los campos
router.patch("/employees/:id", updateEmployees);

//patch , actualiza solo un campo

router.delete("/employees/:id", deleteEmployees);

export default router;
