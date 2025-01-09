import path from "node:path";
import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import { api } from "./api.js";

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.join("src", "public")));

app.use("/api", api);

const PORT = 3000;
app.listen(PORT, async () => {
  console.log("Connecting to MongoDB...");
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Connected to MongoDB!");

  console.log(`Server running on http://localhost:${PORT}`);
});
