import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { config } from "../config/config.js";
import adminModel from "../models/admin.model.js";

class adminServices {
    constructor() {
        this.adminRepository = new MongoUserRepository();
    }

    async register(adminData) {
        console.log(userData, "This is userData");
        const email = userData.email.trim().toLowerCase();

        const existsEmail = await this.adminRepository.findByIdEmail
    }
}

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