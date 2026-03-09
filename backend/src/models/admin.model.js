import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
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
}, {
    timestamps: true,
    versionKey: false
})

const adminModel = mongoose.model("Admin", adminSchema);
export default adminModel; 