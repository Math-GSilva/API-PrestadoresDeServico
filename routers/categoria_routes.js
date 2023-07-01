import express from "express";
import {
  createCategoria,
  deleteCategoria,
  getCategorias,
  updateCategoria,
} from "../controller/categoria_controller.js";

const router = express.Router();

router.get("/categoria", getCategorias);
router.post("/categoria", createCategoria);
router.put("/categoria/:id", updateCategoria);
router.delete("/categoria/:id", deleteCategoria);

export default router;
