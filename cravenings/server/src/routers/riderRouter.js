import express from "express";
import { PartnerProtect, protect } from "../middlewares/authmiddleware.js";
import {
  RiderGetAvailableOrder,
  RiderGetCompletedOrder,
  RiderGetOngoingOrder,
} from "../controllers/riderController.js";

const router = express.Router();

router.post("/availableOrder", protect, PartnerProtect, RiderGetAvailableOrder);
router.get("/ongoingOrder", protect, PartnerProtect, RiderGetOngoingOrder);
router.get("/completedOrder", protect, PartnerProtect, RiderGetCompletedOrder);

export default router;
