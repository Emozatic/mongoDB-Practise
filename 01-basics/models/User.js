const mongoose= require("mongoose");
const userSchema= new mongoose.Schema({
    name:String,
    age:Number,
    skills:String,
})
const User= mongoose.model("user", userSchema);
export default User;