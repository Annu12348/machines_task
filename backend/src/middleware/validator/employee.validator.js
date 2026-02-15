import { body } from "express-validator";

export const createEmployeeValidator = [
  body("name")
    .notEmpty()
    .withMessage("Name is required")
    .trim(),

  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email format")
    .normalizeEmail(),

  body("phone")
    .notEmpty()
    .withMessage("Phone number is required")
    .isLength({ min: 10, max: 15 })
    .withMessage("Phone must be between 10 to 15 digits"),

  body("department")
    .notEmpty()
    .withMessage("Department is required"),

  body("status")
    .optional()
    .isIn(["Active", "Inactive"])
    .withMessage("Status must be active or inactive"),
];

export const updateEmployeeValidator = [
  body("name")
    .optional()
    .notEmpty()
    .withMessage("Name cannot be empty")
    .trim(),

  body("email")
    .optional()
    .isEmail()
    .withMessage("Invalid email format")
    .normalizeEmail(),

  body("phone")
    .optional()
    .isLength({ min: 10, max: 15 })
    .withMessage("Phone must be between 10 to 15 digits"),

  body("department")
    .optional()
    .notEmpty()
    .withMessage("Department cannot be empty"),

  body("status")
    .optional()
    .isIn(["Active", "Inactive"])
    .withMessage("Status must be Active or Inactive"),
];
