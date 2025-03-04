import express from "express";
import "dotenv/config";
import { ConnectDB } from "./db";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

import Routes from './routes';
app.use("/api/v1", Routes);



ConnectDB();
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
