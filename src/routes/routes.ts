import { Router } from "express";
import DataHandler from "../middlewares/datahandler";
import auth from "../middlewares/auth";
import User from "./user.routes";
import Sales from "./sales.routes";
import Login from "./auth.routes";

const router = Router();

router.use("/login", Login);
router.use("/sales", Sales);

router.use(auth);
router.use("/user", User);

router.use(DataHandler);

export default router;
