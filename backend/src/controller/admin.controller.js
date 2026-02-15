import { config } from "../config/config.js";
import jwt from "jsonwebtoken";
import adminModel from "../models/admin.model.js";
import * as userServices from "../services/admin.service.js";


export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await userServices.login({ email, password })

    res.cookie("token", admin.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      message: "Login successfully",
      result: admin.admin,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message || "Internal server error",
    });
  }
};

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

