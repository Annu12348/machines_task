import express from "express";
import adminController, { protectedRoutesController } from "../controller/admin.controller.js";
import { errorValidator } from "../middleware/errorHandeling.middleware.js";
import { loginValidator, registerValidator } from "../middleware/validator/admin.validator.js";
const router = express.Router();


router.post(
    "/register",
    registerValidator,
    errorValidator,
    adminController.register
);

router.post(
    "/login",
    loginValidator,
    errorValidator,
    adminController.login
);

router.get("/me", protectedRoutesController);

export default router;