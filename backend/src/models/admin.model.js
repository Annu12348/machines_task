import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    // Contact is required for normal (email/password) admins,
    // but may be omitted for Google-based admins.
    contact: {
        type: String,
        unique: true
    },

    email: {
        type: String,
        required: true,
        lowercase: true
    },

    // Password is required for "local" admins but not for "google" admins
    // because they authenticate via OAuth.
    password: {
        type: String,
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

    provider: {
        type: String,
        enum: ["local", "google"],
        default: "local"
    },

    imageUrl: {
        type: String,
        default: ""
    },

    googleId: {
        type: String,
        default: ""
    },
}, {
    timestamps: true,
    versionKey: false
})

const adminModel = mongoose.model("Admin", adminSchema);
export default adminModel; 