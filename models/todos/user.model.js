import mongoose from "mongoose"

const userSchema =  new mongoose.Schema({
  user:{  
    type: string,
    requried: true,
    unique: true,
    lowercase: true,   
  },
  password: {
    type: String,
    rquired: true,    
  },
  email:{
    type: String,
    required: true,
    uinque: true,
    lowcase: true
  }},{timestamps: true})

  export const user = mongoose.model("User",userSchema)