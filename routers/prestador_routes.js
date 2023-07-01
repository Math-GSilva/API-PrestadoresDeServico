import express from "express";
import {
  getPrestadores,
  getPrestadoresByCategoria,
  getPrestadoresByServico,
  createPrestador,
  updatePrestador,
  deletePrestador,
} from "../controller/prestador_controller.js";

const router = express.Router();

router.get("/prestador", getPrestadores);
router.get("/prestadorByCat/:idCategoria", getPrestadoresByCategoria);
router.get("/prestadorBySer/:idServico", getPrestadoresByServico);
router.post("/prestador", createPrestador);
router.put("/prestador/:id", updatePrestador);
router.delete("/prestador/:id", deletePrestador);

export default router;
