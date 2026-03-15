import { config } from "../config/config.js";
import jwt from "jsonwebtoken";
import adminModel from "../models/admin.model.js";
import adminService, * as userServices from "../services/admin.service.js";

class adminController {

  async register(req, res) {
    try {
      const admin = await adminService.register(req.body);

      res.cookie("token", admin.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
        maxAge: 24 * 60 * 60 * 1000,
      });

      res.status(201).json({
        success: true,
        message: "Admin registered successfully",
        data: admin
      });
    } catch (error) {
      res.status(500).json({
        message: error.message || "Internal server error"
      })
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;

      const admin = await adminService.login(email, password)

      res.cookie("token", admin.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
        maxAge: 24 * 60 * 60 * 1000,
      });

      res.status(200).json({
        message: "Login successfully",
        result: admin.admin,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message || "Internal server error"
      })
    }
  }

  async otpSendToEmail(req, res) {
    try {
      const { email } = req.body;

      const admin = await adminService.otpSendToEmail(email);

      res.status(200).json({
        message: "OTP sent successfully",
        data: admin
      });
    } catch (error) {
      res.status(500).json({
        message: error.message || "Internal server error"
      });
    }
  }

  async otpVerify(req, res) {
    try {
      const { email, otp } = req.body;

      const admin = await adminService.otpVerify(email, otp);

      res.status(200).json({
        success: true,
        message: "OTP verified successfully",
        data: admin
      })
    } catch (error) {
      res.status(500).json({
        message: error.message || "Internal server error"
      });
    }
  }

  async changePassword(req, res) {
    try {
      const { email, newPassword } = req.body;

      const admin = await adminService.changePassword(email, newPassword);

      res.status(200).json({
        success: true,
        message: "Password changed successfully",
        data: admin
      })
    } catch (error) {
      res.status(500).json({
        message: error.message || "Internal server error"
      });
    }
  }

  async googleWithRegister(req, res) {
    try {
      const result = await adminService.googleWithRegister(req.user);

      res.cookie("token", result.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
        maxAge: 24 * 60 * 60 * 1000,
      });

      console.log(result)

      return res.redirect(
        `${config.FRONTEND_URL}`
      );
    } catch (error) {
      res.status(500).json({
        message: error.message || "Internal server error"
      })
    }
  }

  async googleWithLogin(req, res) {
    try {
      const result = await adminService.googleWithLogin(req.user);

      res.cookie("adminToken", result.token, {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        maxAge: 24 * 60 * 60 * 1000
      });

      return res.redirect(`${config.FRONTEND_URL}/`);
    } catch (error) {
      return res.redirect(
        `${config.FRONTEND_URL}/login?error=${encodeURIComponent(error.message)}`
      );
    }
  }

  async logout(req, res) {
    try {
      const adminId = req.admin.id;

      const admin = await adminService.logout(adminId);

      res.clearCookie("token", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/"
      });

      return res.status(200).json({
        success: true,
        message: "Logged out successfully",
        data: admin,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }
}

export default new adminController();

export const protectedRoutesController = async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized: No token provided" });
    }

    let decoded;
    try {
      decoded = jwt.verify(token, config.JWT_SECRET_KEY);
    } catch (err) {
      return res.status(401).json({ message: "Unauthorized: Invalid or expired token" });
    }

    const admin = await adminModel.findById(decoded.id).select("-password");
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    res.status(200).json({ message: "Access granted", admin });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

