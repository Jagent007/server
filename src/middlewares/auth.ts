import jwt, { Secret } from "jsonwebtoken";
import { NextFunction, Request, RequestHandler, Response } from "express";

declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

const auth: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as Secret);

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({ message: "Token expired or invalid" });
  }
};

export default auth;
