import mongoose from "mongoose";
let postSchema= new mongoose.Schema({
    title:String,
    content:String,
    author: {
        type:mongoose.Schema.ObjectId,
        ref: "User"
    }
});
let Post= mongoose.model("Post", postSchema);
export default Post;