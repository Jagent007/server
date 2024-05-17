import { Router } from "express";
import SalesController from "../controllers/SalesController";

const router = Router();

router.post("/", async (req, _res, next) =>
  next(await SalesController.create(req))
);

router.get("/", async (req, _res, next) =>
  next(await SalesController.cotationValue(req))
);


export default router;
