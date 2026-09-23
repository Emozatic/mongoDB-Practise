import mongoose from "mongoose";
const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true,
    },
    skills:{
        type:[String],
        required:true,
    },
    followers:Number,
})
const User= mongoose.model("user", userSchema);
export default User;