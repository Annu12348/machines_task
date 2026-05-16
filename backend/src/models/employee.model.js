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

  password: {
    type: String,
    required: true,
    minlength: 8,
    select: false, // to exclude password by default when querying
    trim: true,
  },

  profileImage: {
    type: String,
    required: false,
    trim: true,
  },

  employeeId: {
    type: String,
    required: true,
    unique: true,
    trim: true,
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

  designation: {
    type: String,
    required: true,
  },

  joiningDate: {
    type: Date,
    required: true,
  },
  
  reportingManager: {
    type: String,
    required: false,
    trim: true,
  },
}, {
  timestamps: true,
  versionKey: false
});

const employeeModel = mongoose.model("Employee", employeeSchema);
export default employeeModel;