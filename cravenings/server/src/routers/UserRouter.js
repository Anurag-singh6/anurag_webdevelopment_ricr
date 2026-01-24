import express from "express";
import { UserUpdate } from "../controllers/usercontroller.js";
import { protect } from "../middlewares/authmiddleware.js";

const router = express.Router();

router.put("/update", protect, UserUpdate);

export default router;
