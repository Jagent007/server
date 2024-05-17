import { Router } from "express";
import UserController from "../controllers/UserController";

const router = Router();

router.post("/", async (req, _res, next) =>
  next(await UserController.login(req))
);



export default router;
