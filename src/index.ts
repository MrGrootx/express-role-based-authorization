import express from "express";
import "dotenv/config";
import { ConnectDB } from "./db";
import UserRoutes from "./routes/user.routes";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

import Routes from "./routes";
app.use("/api/v1/auth", Routes);
app.use("/api/v1/users", UserRoutes);

ConnectDB();
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
