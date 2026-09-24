import mongoose from "mongoose";
const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim :true,
        unique:true
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
    gender:{
        type:String,
        enum:["male", "female", "others"],
    },
    projects:[
        {
            name:String,
            tech:String,
            Year:Number,
        }
    ]
})
const User= mongoose.model("User", userSchema);
export default User;