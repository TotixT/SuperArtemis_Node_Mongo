import express from "express";

const router = express.Router();

import { obtenerCliente, obtenerClienteId, agregarCliente, borrarCliente, actualizarCliente } from "../controllers/cliente.controllers.js";

router.get("/all", obtenerCliente);
router.get("/one/:id", obtenerClienteId);
router.post("/add", agregarCliente);
router.delete("/del/:id", borrarCliente);
router.patch("/upt/:id",actualizarCliente);

export default router;