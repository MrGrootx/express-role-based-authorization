import { Request, Response } from "express";
import User from "../../db/Schemas/User.schema";
import bcrypt from "bcrypt";

const register = async (req: Request, res: Response) => {
  const { email, password, role } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        email,
        password: hashedPassword,
        role,
      });
      newUser.save();
      res.status(200).json({
        message: "User created successfully",
        status: true,
      });
    } else {
      res.status(400).json({
        message: "User already exists",
        status: false,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error,
      status: false,
    });
    console.log(error);

    return;
  }
};
export default register;
