import mongoose from "mongoose";

const DataSchema = new mongoose.Schema({}, { strict: false });
const Data = mongoose.model("Data", DataSchema);

export default Data;
