import express from "express";

const router = express.Router();

import { obtenerEmpleado, obtenerEmpleadoId, agregarEmpleado, borrarEmpleado, actualizarEmpleado } from "../controllers/empleado.controllers.js";

router.get("/all",obtenerEmpleado);
router.get("/one/:id",obtenerEmpleadoId);
router.post("/add",agregarEmpleado);
router.delete("/del/:id",borrarEmpleado);
router.patch("/upt/:id",actualizarEmpleado);

export default router;