import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },

  phone: {
    type: String,
    required: true,
  },

  department: {
    type: String,
    required: true,
  },

  status: {
    type: String,
    enum: ["Active", "Inactive"],
    default: "Active",
  },
}, { 
  timestamps: true,
  versionKey: false
 });

const employeeModel = mongoose.model("Employee", employeeSchema);
export default employeeModel;