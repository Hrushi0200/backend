
import mongoose, { Schema } from "mongoose";

const userSchema=new Schema({
    username:{
        type:String,
        require:true

    },
    email:{
        type:String,
        required:true,
        unique:true
    }
})

export const User=mongoose.model('User',userSchema);