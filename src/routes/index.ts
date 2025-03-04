import express from "express";
import register from "../controllers/auth/register.controller";
import login from "../controllers/auth/login.controller";
import validateUser from "../helpers/user.validator";
import validate from "../middlewares/validation.middleware";

const router = express.Router();

router.post("/register", validateUser, validate, register);
router.post("/login", login);

export default router;
