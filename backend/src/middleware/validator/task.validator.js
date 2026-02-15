import { body, param } from "express-validator";

export const taskCreateValidator = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("Title is required")
    .isLength({ min: 3 })
    .withMessage("Title must be at least 3 characters"),

  body("description")
    .optional()
    .isLength({ max: 500 })
    .withMessage("Description cannot exceed 500 characters"),

  body("assignedEmployee")
    .notEmpty()
    .withMessage("Assigned Employee is required")
    .isMongoId()
    .withMessage("Invalid Employee ID"),

  body("priority")
    .optional()
    .isIn(["Low", "Medium", "High"])
    .withMessage("Priority must be Low, Medium, or High"),

  body("deadline")
    .optional()
    .isISO8601()
    .withMessage("Invalid date format for deadline"),

  body("status")
    .optional()
    .isIn(["Pending", "In Progress", "Completed"])
    .withMessage("Invalid status value"),
];

export const taskUpdateValidator = [
  param("id")
    .isMongoId()
    .withMessage("Invalid Task ID"),

  body("title")
    .optional()
    .isLength({ min: 3 })
    .withMessage("Title must be at least 3 characters"),

  body("description")
    .optional()
    .isLength({ max: 500 })
    .withMessage("Description cannot exceed 500 characters"),

  body("assignedEmployee")
    .optional()
    .isMongoId()
    .withMessage("Invalid Employee ID"),

  body("priority")
    .optional()
    .isIn(["Low", "Medium", "High"])
    .withMessage("Priority must be Low, Medium, or High"),

  body("deadline")
    .optional()
    .isISO8601()
    .withMessage("Invalid date format for deadline"),

  body("status")
    .optional()
    .isIn(["Pending", "In Progress", "Completed"])
    .withMessage("Invalid status value"),
];
