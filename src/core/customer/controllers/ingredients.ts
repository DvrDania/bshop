import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

export async function getIngredients(req: Request, res: Response) {
  const prisma = new PrismaClient();
  const ingredients = await prisma.ingredients.findMany();
  res.json(ingredients);
}
