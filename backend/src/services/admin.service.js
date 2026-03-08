import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { config } from "../config/config.js";
import adminModel from "../models/admin.model.js";
import MongoAdminRepository from '../repositories/implementations/mongoUserRepository.js';

class AdminServices {
    constructor() {
        this.adminRepository = new MongoAdminRepository();
    }

    async register(adminData) {
        const admin = await this.adminRepository.createdAdmin(adminData);

        return admin;
    }
}

export default new AdminServices();



export const login = async ({ email, password }) => {
    email = email.trim().toLowerCase();

    const admin = await adminModel.findOne({ email }).select("+password");

    if (!admin) {
        const error = new Error("Invalid email or password");
        error.statusCode = 401;
        throw error;
    }

    const matchPassword = await bcrypt.compare(password, admin.password);
    if (!matchPassword) {
        const error = new Error("Invalid email or password");
        error.statusCode = 401;
        throw error;
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
    };
};