import { NextFunction, Request, Response } from "express";

export const AuthorizeRoles = (...roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = req.user as { role?: string };
    if (!roles.includes(user.role ?? '')) {
      res.status(403).json({ message: "Unauthorized" });
      return
    }
    next();
  };
};
