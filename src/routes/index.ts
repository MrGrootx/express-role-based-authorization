import express from "express";
import register from "../controllers/auth/register.controller";
import login from "../controllers/auth/login.controller";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

export default router;
