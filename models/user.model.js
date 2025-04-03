import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "User Name is required"],
        trim: true,
        minLenth: 2,
        maxLength: 50
    },
    email: {
        type: String,
        required: [true, "Usre Email is required"],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, "Please fill a valid email address"],
    },
    password: {
        type: String,
        required: [true, "User Password is required"],
        minLenth: 6,
    }
}, { timestamps: true });


const User = mongoose.model("User", userSchema);

export default User