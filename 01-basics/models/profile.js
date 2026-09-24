import mongoose from "mongoose";
const profileSchema= new mongoose.Schema({
    bio:String,
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User"
    }
})
let Profile= mongoose.model("Profile", profileSchema);
export default Profile;