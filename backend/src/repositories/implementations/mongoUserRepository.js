import adminModel from "../../models/admin.model.js";
import AppError from "../../utils/errors.js";
import IAdminRepository from "../contracts/IAdminRepository.js";

class MongoAdminRepository extends IAdminRepository {
    async createdAdmin(adminData) {
        try {
            const admin = new adminModel(adminData)
            const savedAdmin = await admin.save()
            return savedAdmin;
        } catch (error) {
            console.error("Error creating user:", error);
            throw new AppError(`Failed to create admin: ${error.message}`, 500, error)
        }
    }
}

export default MongoAdminRepository;