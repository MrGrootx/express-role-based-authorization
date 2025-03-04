import mongoose from "mongoose";

export const ConnectDB = async () => {
  await mongoose
    .connect(process.env.MONGODB_URL as string, {
      dbName: "express-role-based-authorization",
    })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log("Error connecting to MongoDB", err);
    });
};
