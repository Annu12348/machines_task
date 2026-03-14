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
    "/google/register",
    passport.authenticate("google-register", {
        scope: ["profile", "email"],
        prompt: "select_account"
    })
)

router.get(
    "/google/register/callback",
    passport.authenticate("google-register", {
        session: false,
        failureRedirect: "http://localhost:5173/login"
    }),
    adminController.googleWithRegister
);

router.get(
    "/google/login",
    passport.authenticate("google-login", {
        scope: ["profile", "email"]
    })
);

router.get(
    "/google/login/callback",
    passport.authenticate("google-login", {
        session: false,
        failureRedirect: "http://localhost:5173/login"
    }),
    adminController.googleWithLogin
);

router.get("/me", protectedRoutesController);

export default router;