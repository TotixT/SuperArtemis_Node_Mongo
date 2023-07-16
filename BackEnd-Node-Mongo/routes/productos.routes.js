import express from "express";

const router = express.Router();

import { obtenerProducto, obtenerProductoId, agregarProducto, borrarProducto, actualizarProducto } from "../controllers/producto.controllers.js";

router.get("/all",obtenerProducto);
router.get("/one/:id",obtenerProductoId);
router.post("/add", agregarProducto);
router.delete("/del/:id", borrarProducto);
router.patch("/upt/:id", actualizarProducto);

export default router;