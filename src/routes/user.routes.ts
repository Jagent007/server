import { Router } from "express";
import UserController from "../controllers/UserController";

const router = Router();

router.get("/", async (req, _res, next) =>
  next(await UserController.findMany(req))
);



export default router;