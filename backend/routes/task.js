const router = require("express").Router();
const Task = require("../models/Task");
const user = require("../models/User");
// create task 
router.post("/create-task", async (req, res) => {
    try {
        const { title, desc } = req.body;
        const {id}= req.headers;
        const newTask = new Task({ title: title, desc: desc });
        const savedTask = await newTask.save();
        await user.findByIdAndUpdate(id,{$push:{tasks:savedTask._id}});
        res.status(200).json({message:"Task Created"})
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: "Internal Server Error" });
    }
})
module.exports = router;