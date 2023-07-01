import express from "express";
import {
    login
} from "../controller/token_controller.js";

const router = express.Router();

router.post("/login", login);

export default router;
