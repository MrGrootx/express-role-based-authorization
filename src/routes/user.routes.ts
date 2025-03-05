import express, { Request, Response } from "express";
import { verifyToken } from "../middlewares/auth.middleware";
import { AuthorizeRoles } from "../middlewares/role.middleware";

const router = express.Router();

router.get(
  "/admin",
  verifyToken,
  AuthorizeRoles("admin"),
  (req: Request, res: Response) => {
    res.send("Admin Page");
  }
);

router.get(
  "/mod",
  verifyToken,
  AuthorizeRoles("mod", "admin"),
  (req: Request, res: Response) => {
    res.send("Mod Page");
  }
);

router.get(
  "/user",
  verifyToken,
  AuthorizeRoles("user", "mod", "admin"),
  (req: Request, res: Response) => {
    res.send("User Page");
  }
);

export default router;
