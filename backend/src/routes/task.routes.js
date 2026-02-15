import express from "express";
import { adminAuth } from "../middleware/auth.middleware.js";
import {
    taskAllReadController,
    taskCreateController,
    taskDeleteController,
    taskUpdateController,
    taskReadByIdController
} from "../controller/task.controller.js";
import { taskCreateValidator, taskUpdateValidator } from "../middleware/validator/task.validator.js";
import { errorValidator } from "../middleware/errorHandeling.middleware.js";
const router = express.Router();

router.post("/create", adminAuth, taskCreateValidator, errorValidator, taskCreateController)
router.get("/read", adminAuth, taskAllReadController);
router.delete("/delete/:id", adminAuth, taskDeleteController);
router.put("/update/:id", adminAuth,  taskUpdateController);
router.get("/read/:id", adminAuth, taskReadByIdController);

export default router