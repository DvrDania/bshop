import express from "express";
import { router as moderatorRoutes } from "./core/moderator/routes";
import { router as customerRoutes } from "./core/customer/routes";

const app = express();
const port = 3000;

app.use(moderatorRoutes).use(customerRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
