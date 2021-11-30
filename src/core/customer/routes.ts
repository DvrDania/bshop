import express from "express";
import { getIngredients } from "./controllers/ingredients";

export const router = express.Router();

router.get("/ingredients", getIngredients);
