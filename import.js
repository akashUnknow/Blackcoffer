import mongoose from "mongoose";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import Data from "./models/Data.js";
import connectDB from "./config/db.js";

dotenv.config();
await connectDB();

const __dirname = path.resolve();
const rawData = fs.readFileSync(path.join(__dirname, "data/data.json"), "utf-8");
const jsonData = JSON.parse(rawData);

try {
  await Data.insertMany(jsonData);
  console.log("Data imported successfully to MongoDB Atlas.");
  process.exit();
} catch (error) {
  console.error("Import error:", error);
  process.exit(1);
}
