import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import apiResponse from "../../../api_response";

export async function getTables(req: Request, res: Response) {
  const prisma = new PrismaClient();
  const tables = await prisma.tables.findMany();
  res.json(tables);
}

export async function getTable(req: Request, res: Response) {
  const prisma = new PrismaClient();
  const tableNumber = parseInt(req.params.tableNumber);

  const table = await prisma.tables.findUnique({
    where: {
      number: tableNumber,
    },
  });
  if (table === null) {
    res.status(404).json(new apiResponse(false, "Table not found", null));
  } else {
    res.json(new apiResponse(true, "Table fetched successfully", table));
  }
}
