import express from 'express';
const router = express.Router();
import { adminAuth } from '../middleware/auth.middleware.js';
import { createEmployeeValidator, updateEmployeeValidator } from '../middleware/validator/employee.validator.js';
import { errorValidator } from '../middleware/errorHandeling.middleware.js';
import {
    employeeCreateController,
    employeeUpdateController,
    employeeSingleReadController,
    employeeDeleteController,
    employeeAllReadController,
    employeeSearchController
} from '../controller/employee.controller.js';

router.post(
    '/create',
    adminAuth,
    createEmployeeValidator,
    errorValidator,
    employeeCreateController
)

router.put(
    "/update/:id",
    adminAuth,
    updateEmployeeValidator,
    errorValidator,
    employeeUpdateController
)

router.delete(
    "/delete/:id",
    adminAuth,
    employeeDeleteController
)

router.get(
    "/read",
    adminAuth,
    employeeAllReadController
)

router.get(
    "/search",
    adminAuth,
    employeeSearchController
);

router.get(
    "/:id",
    adminAuth,
    employeeSingleReadController
)

export default router;