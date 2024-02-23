import mongoose from "mongoose"

const todoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    complete:{
        type: Boolean,
        required: false,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    subtodo: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Subto"
        }
    ]

},{timestamps: true})

export const todo = mongoose.model("Todo",todoSchema)
