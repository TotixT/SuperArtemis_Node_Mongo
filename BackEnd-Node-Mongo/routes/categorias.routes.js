import express from "express";

const router = express.Router();

import { obtenerCategoria, obtenerCategoriaId, agregarCategoria, borrarCategoria, actualizarCategoria } from "../controllers/categoria.controllers.js";

router.get("/all",obtenerCategoria);
router.get("/one/:id",obtenerCategoriaId);
router.post("/add",agregarCategoria);
router.delete("/del/:id",borrarCategoria);
router.patch("/upt/:id",actualizarCategoria);


export default router;