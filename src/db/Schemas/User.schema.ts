import { Model, model, Schema } from "mongoose";

enum UserRole {
  Admin = "admin",
  User = "user",
}

interface User {
  email: string;
  password: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
}
const userSchema = new Schema<User>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: Object.values(UserRole),
    },
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

export default User;
