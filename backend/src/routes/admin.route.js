import express from "express";
import adminController, { protectedRoutesController } from "../controller/admin.controller.js";
import { errorValidator } from "../middleware/errorHandeling.middleware.js";
import { loginValidator, registerValidator } from "../middleware/validator/admin.validator.js";
import passport from "../config/passport.config.js";
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

router.post(
    "/otp-send-to",
    adminController.otpSendToEmail
)

router.post(
    "/otp-verify",
    adminController.otpVerify
)

router.post(
    "/change-password",
    adminController.changePassword
)

router.get(
    "/google",
    passport.authenticate("google", {
        scope: ["profile", "email"]
    })
)

router.get(
    "/google/callback",
    passport.authenticate("google", {
        session: false,
        failureRedirect: "http://localhost:5173/login"
    }),
    adminController.googleWithRegister
);

router.get("/me", protectedRoutesController);

export default router;