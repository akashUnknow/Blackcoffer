import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import dataRoutes from "./routes/dataRoutes.js";

dotenv.config();
const app = express();
app.use(express.json());

await connectDB();

app.use("/api/data", dataRoutes);

app.get("/", (req, res) => res.send("API is running"));

app.listen(process.env.PORT, () => {
  console.log(`Server is running at http://localhost:${process.env.PORT}`);
});
