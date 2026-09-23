import express from "express";
const app= express();
import User from "./models/User.js"
import "dotenv/config";
import mongoose from "mongoose";
app.use(express.json())


//connection for MongoDB
mongoose.connect(process.env.MONGO_URL).then(()=>{console.log("MongoDB connected");
    console.log("Database", mongoose.connection.db.databaseName)
}).catch((err)=>{console.log(err)});


//start:-
app.post("/users", async (req,res)=>{
    try{
        const user= await User.create(req.body);
        res.status(201).json(user);
    }
    catch(err){
        res.status(500).json({error:err.message})
    }
})

app.get("/getUsers", async(req,res)=>{
    try{
        let data= await User.findOne({name:"lucky Kumar"});
        res.json(data)
        console.log(data)
    }catch(err){
        console.log(err);
    }
})

app.listen(8000,()=>{
    console.log("app is listening at 8000");
})