import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { config } from "../config/config.js";
import adminModel from "../models/admin.model.js";
import MongoAdminRepository from '../repositories/implementations/mongoUserRepository.js';
import AppError from '../utils/errors.js';

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

        const token = jwt.sign({ id: admin._id }, config.JWT_SECRET_KEY, { expiresIn: '1d' });

        return {
            admin: {
                _id: admin._id,
                name: admin.name,
                email: admin.email,
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

        const token = jwt.sign({ id: admin._id }, config.JWT_SECRET_KEY, { expiresIn: '1d' });

        return {
            admin: {
                _id: admin._id,
                name: admin.name,
                email: admin.email,
                createdAt: admin.createdAt,
                updatedAt: admin.updatedAt
            },
            token
        }
    }
}

export default new AdminServices();