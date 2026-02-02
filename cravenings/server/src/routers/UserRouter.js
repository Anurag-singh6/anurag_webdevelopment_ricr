import express from "express";
import { UserChangePhoto, UserUpdate, UserResetPassword } from "../controllers/usercontroller.js";
import { protect } from "../middlewares/authmiddleware.js";
import multer from "multer"

const router = express.Router();
const upload = multer();


router.put("/update", protect, UserUpdate);
router.patch("/changePhoto",protect, upload.single("image"), UserChangePhoto)
router.patch("/resetpassword", protect, UserResetPassword)



export default router;
