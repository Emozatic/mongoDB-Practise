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
        //basic operations
        // let data= await User.findOne({name:"lucky Kumar"});
        // let data= await User.find({age:{$gte:20}});
        // let data= await User.find({age:{$in:[18,20,30]}})
        // let data= await User.find({$or : [{name:"lucky Kumar"},{name:"rahul"}]})
        // let data= await User.find({$and: [{name: "lucky Kumar"},{age:20}]})
        // let data= await User.find({$and: [{age:{$gt:19}}, {age:{$gte:20}}]})
        // let data= await User.find({}, "name followers")
        // let data= await User.find().select("name age")
        // let data= await User.find().sort({followers:-1})
        // let data= await User.find().sort({followers:-1}).limit(1)

        //UPDATE RELATED:-
        const id= await User.find().select("id").limit(1);
        console.log(id)
        const data= await User.findByIdAndUpdate(id, {name:"lucky Kumar"})

        res.json(data)
        console.log(data)
    }catch(err){
        console.log(err);
    }
})

app.put("/user/:id", async(req,res)=>{
    try{
        const data= await User.findByIdAndUpdate(req.params.id,req.body);
        res.json(data);
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
})

app.delete("/user/:id",async(req,res)=>{
    try{
        let {id}= req.params
        let data= await User.findByIdAndDelete(id);
        res.json(data)
    }catch(err){
        res.status(500).json({error:err.message});
    }
})

app.get("/allUsers", async(req,res)=>{
    try{
        let data= await User.find({});
        res.json(data);
    }catch(err){
        console.log(err);
    }
})

app.listen(8000,()=>{
    console.log("app is listening at 8000");
})