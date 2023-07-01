import express from "express";
import {
  createServico,
  deleteServico,
  getServicos,
  updateServiço,
} from "../controller/servico_controller.js";

const router = express.Router();

router.get("/servico", getServicos);
router.post("/servico", createServico);
router.put("/servico/:id", updateServiço);
router.delete("/servico/:id", deleteServico);

export default router;
