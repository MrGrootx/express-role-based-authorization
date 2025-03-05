import { body } from "express-validator";
import { UserRole } from "../db/Schemas/User.schema";

const validateUser = [
  body("email")
    .isEmail()
    .withMessage("Please provide a valid email address")
    .normalizeEmail(),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
  body("role")
    .isIn(Object.values(UserRole))
    .withMessage("Role must be either 'admin' or 'user'"),
];

export default validateUser;
