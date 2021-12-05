import express from "express";
import { getIngredients } from "./controllers/ingredients";
import { getTable } from "./controllers/tables";

export const router = express.Router();

router.get("/ingredients", getIngredients);
router.get("/tables/:tableNumber", getTable);
