const router = require("express").Router();
const Task = require("../models/Task");
const user = require("../models/User");
// create task 
router.post("/create-task", async (req, res) => {
    try {
        const { title, desc } = req.body;
        const {id}= req.headers;
        if(!title){
            return res.status(400).json({message:"Title is required"});
        }
        if(!desc){
            return res.status(400).json({message:"Description is required"})
        }
        if(!id){
            return res.status(400).json({message:"user ID is required"});
        }
        const newTask = new Task({ title,desc});
        const savedTask = await newTask.save();
        await user.findByIdAndUpdate(id,{$push:{tasks:savedTask._id}});
        res.status(200).json({message:"Task Created"})
    } catch (error) {
        console.log(error);
        if(error.code === 11000){
            return res.status(400).json({message:"Duplicate key error: Task title must be unique"})
        }
        return res.status(400).json({ message: "Internal Server Error" });
    }
})
module.exports = router;