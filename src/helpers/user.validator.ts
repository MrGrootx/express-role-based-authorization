import { body } from "express-validator";

const validateUser = [
  body("email")
    .isEmail()
    .withMessage("Please provide a valid email address")
    .normalizeEmail(),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
  body("role")
    .isIn(["admin", "user"])
    .withMessage("Role must be either 'admin' or 'user'"),
];

export default validateUser;
