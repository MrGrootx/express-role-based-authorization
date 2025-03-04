import express from "express";

const router = express();

import authControllerLogin from "./auth/login.controller";
import authControllerRegister from "./auth/register.controller";

router.use("/", authControllerLogin);
router.use("/", authControllerRegister);
