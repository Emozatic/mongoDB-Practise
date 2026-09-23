const express= require("express");
const app= express();
const User= require("./models/User");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URL).then(()=>{console.log("MongoDB connected")}).catch((err)=>{console.log(err)});

app.listen(8000,()=>{
    console.log("app is listening at 8000");
})