import express from "express";
import { loginController, protectedRoutesController } from "../controller/admin.controller.js";
import { loginValidator } from "../middleware/validator/admin.validator.js";
import { errorValidator } from "../middleware/errorHandeling.middleware.js";
const router = express.Router();


router.post("/login", loginValidator, errorValidator, loginController);
router.get("/me", protectedRoutesController);

export default router;