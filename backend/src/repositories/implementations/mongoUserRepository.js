import adminModel from "../../models/admin.model.js";
import { IAdminRepository } from "../contracts/IAdminRepository.js";

class MongoAdminRepository extends IAdminRepository {
    async createdAdmin(adminData) {
        try {
            const admin = new adminModel(adminData)
            const savedAdmin = await admin.save()
            return savedAdmin;
        } catch (error) {
            console.error("Error creating user:", error);
        }
    }
}

export default MongoAdminRepository;