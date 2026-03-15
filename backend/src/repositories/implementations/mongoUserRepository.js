import adminModel from "../../models/admin.model.js";
import AppError from "../../utils/errors.js";
import IAdminRepository from "../contracts/IAdminRepository.js";

class MongoAdminRepository extends IAdminRepository {
    async createdAdmin(adminData) {
        try {
            const admin = await adminModel.create(adminData)
            return admin;
        } catch (error) {
            console.error("Error creating user:", error);
            throw new AppError(`Failed to create admin: ${error.message}`, 500, error)
        }
    }

    async findAdminByEmail(email) {
        try {
            return await adminModel.findOne({ email })
        } catch (error) {
            throw new AppError(`failed to email: ${error.message}`, 500, error)
        }
    }

    async adminFetchById (adminId) {
        try {
            const admin = await adminModel.findById(adminId)

            return admin;
        } catch (error) {
            throw new AppError(`Failed to fetch admin by ID: ${error.message}`, 500, error)
        }
    }
}

export default MongoAdminRepository;