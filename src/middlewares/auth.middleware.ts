import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
declare module "express" {
  interface Request {
    user?: string | JwtPayload;
  }
}

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  let token;
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer ")) {
    token = authHeader.split(" ")[1];

    if (!token) {
      res.status(401).json({
        message: "Authorization denied",
      });
      return;
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
      req.user = decoded;
      console.log("the decoded user is", req.user);
      next();
    } catch (error) {
      res.status(400).json({
        message: "Token is not valid",
      });
    }
  } else {
    res.status(401).json({
      message: "Authorization denied",
    });
    return;
  }
};

export { verifyToken };
