import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    contact: {
        type: String,
        required: true,
        unique: true
    },

    email: {
        type: String,
        required: true,
        lowercase: true
    },

    password: {
        type: String,
        required: true,
    },

    role: {
        type: String,
        enum: ['Admin', 'Employee'],
        default: 'Admin', 
    },

    status: {
        type: String,
        enum: ["active", "inactive"],
        default: "active"
    },

    resetOtp: {
        type: String,
    },

    otpExpires: {
        type: Date,
    },
    
    otpVerify: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
    versionKey: false
})

const adminModel = mongoose.model("Admin", adminSchema);
export default adminModel; 