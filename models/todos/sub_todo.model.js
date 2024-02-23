import mongoose from "mongoose";

const subtodoSchema = new mongoose.Schema({
    content: {
        type: String,
        rquired: true,
    },
    complete:{
        type: Boolean,
        required: true,
    }
},{timestamps: true})

export const subtodo = mongoose.model("subtodo",subtodoSchema)
