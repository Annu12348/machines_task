import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { config } from "../config/config.js";
import MongoAdminRepository from '../repositories/implementations/mongoUserRepository.js';
import AppError from '../utils/errors.js';
import { sendOtpMail } from '../workers/sendEmail.js';

class AdminServices {
    constructor() {
        this.adminRepository = new MongoAdminRepository();
    }

    async register(adminData) {
        adminData.email = adminData.email.trim().toLowerCase();

        const existsAdmin = await this.adminRepository.findAdminByEmail(adminData.email);

        if (existsAdmin) {
            throw new AppError("Email already exists", 400)
        }

        adminData.password = await bcrypt.hash(adminData.password, 10)

        const admin = await this.adminRepository.createdAdmin(adminData);

        const token = jwt.sign(
            { id: admin._id, role: admin.role },
            config.JWT_SECRET_KEY,
            { expiresIn: '1d' }
        );

        return {
            admin: {
                _id: admin._id,
                name: admin.name,
                email: admin.email,
                contact: admin.contact,
                role: admin.role,
                status: admin.status,
                createdAt: admin.createdAt,
                updatedAt: admin.updatedAt
            },
            token
        };
    }

    async login(email, password) {
        email = email.trim().toLowerCase();

        const admin = await this.adminRepository.findAdminByEmail(email)

        if (!admin) {
            throw new AppError("Invalid email or password", 401)
        }

        const matchPassword = await bcrypt.compare(password, admin.password);
        if (!matchPassword) {
            throw new AppError("Invalid email or password", 401)
        }

        const token = jwt.sign(
            { id: admin._id, role: admin.role },
            config.JWT_SECRET_KEY,
            { expiresIn: '1d' }
        );

        return {
            admin: {
                _id: admin._id,
                name: admin.name,
                email: admin.email,
                contact: admin.contact,
                role: admin.role,
                status: admin.status,
                createdAt: admin.createdAt,
                updatedAt: admin.updatedAt
            },
            token
        }
    }

    async otpSendToEmail(email) {
        email = email.trim().toLowerCase();

        const admin = await this.adminRepository.findAdminByEmail(email)

        if (!admin) {
            throw new AppError("admin not found", 404)
        }

        const otp = Math.floor(1000 + Math.random() * 9000).toString();
        admin.resetOtp = otp;
        admin.otpExpires = Date.now() + 5 * 60 * 1000;
        admin.otpVerify = false;

        await admin.save();

        await sendOtpMail(email, otp);

        return admin;
    }

    async otpVerify(email, otp) {
        email = email.trim().toLowerCase();

        const admin = await this.adminRepository.findAdminByEmail(email);

        if (!admin) {
            throw new AppError("admin not found", 404)
        }

        if (admin.resetOtp !== otp) {
            throw new AppError("Invalid OTP", 404)
        }

        admin.resetOtp = null;

        if (admin.otpExpires < Date.now()) {
            throw new Error("OTP has expired", 400)
        }


        admin.otpVerify = true;
        admin.otpExpires = Date.now();
        await admin.save()


        return admin;
    }

    async changePassword(email, newPassword) {
        email = email.trim().toLowerCase();

        const admin = await this.adminRepository.findAdminByEmail(email);

        if (!admin) {
            throw new AppError("admin not found", 404)
        }

        if (!admin.otpVerify) {
            throw new AppError("OTP not verified. Please verify your OTP before resetting password.", 400)
        }

        admin.otpVerify = false

        const hashedPassword = await bcrypt.hash(newPassword, 10)
        admin.password = hashedPassword;
        await admin.save()

        return admin;
    }

    async googleWithRegister(adminData) {
        adminData.email = adminData.email.trim().toLowerCase()

        const existsAdmin = await this.adminRepository.findAdminByEmail(adminData.email)

        if (existsAdmin) {
            if (existsAdmin.provider == "google") {
                const token = jwt.sign(
                    { id: existsAdmin._id, role: existsAdmin.role },
                    config.JWT_SECRET_KEY,
                    { expiresIn: '1d' }
                )

                return {
                    admin: existsAdmin,
                    token
                };
            }

            throw new AppError(
                "Admin already exists with email/password login",
                400
            );
        }

        const admin = await this.adminRepository.createdAdmin({
            ...adminData,
            provider: "google"
        });

        if (!admin) {
            throw new AppError("Failed to create admin", 500);
        }

        const token = jwt.sign(
            { id: admin._id, role: admin.role },
            config.JWT_SECRET_KEY,
            { expiresIn: '1d' }
        )

        return {
            admin,
            token
        }
    }
}

export default new AdminServices();