const router = require("express").Router();
const Task = require("../models/Task");
const user = require("../models/User");
const { authToken } = require("./auth");
// create task 
router.post("/create-task", authToken, async (req, res) => {
    try {
        const { title, desc } = req.body;
        const { id } = req.headers;
        if (!title) {
            return res.status(400).json({ message: "Title is required" });
        }
        if (!desc) {
            return res.status(400).json({ message: "Description is required" })
        }
        if (!id) {
            return res.status(400).json({ message: "user ID is required" });
        }
        const newTask = new Task({ title, desc });
        const savedTask = await newTask.save();
        const user = await user.findByIdAndUpdate(id, { $push: { tasks: savedTask._id } }, { new: true });
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }
        res.status(200).json({ message: "Task Created", task: savedTask })
    } catch (error) {
        console.log(error);
        if (error.code === 11000) {
            return res.status(400).json({ message: "Duplicate key error: Task title must be unique" })
        }
        return res.status(500).json({ message: "Internal Server Error" });
    }
})
// for getting all tasks
router.get("/get-all-tasks", authToken, async (req, res) => {
    try {
        const { id } = req.headers;
        const userData = user.findById(id).populate({
            path: "tasks", options: { sort: { createdAt: -1 } },
        });
        res.status(200).json({ data: userData })
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "Internal Server Error" })
    }
})
// for deleting task
router.delete("/delete-task/:id", authToken, async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.headers.id;
        await Task.findByIdAndDelete(id);
        await user.findByIdAndUpdate(userId, { $pull: { tasks: id } });
        res.status(200).json({ message: "Task deleted Successfully" })
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "Internal Server Error" })
    }
})
// for update task 
router.put("/update-task/:id", authToken, async (req, res) => {
    try {
        const { id } = req.params;
        const { title, desc } = req.body;
        await Task.findByIdAndUpdate(id, { title: title, desc: desc })
        res.status(200).json({ message: "Task Updated Successfully" })
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "Internal Server Error" })
    }
})
// update important task 
router.put("/update-task/:id", authToken, async (req, res) => {
    try {
        const { id } = req.params;
        const TaskData = await Task.findById(id);
        const ImpTask = TaskData.important;
        await Task.findByIdAndUpdate(id, { important: !ImpTask })
        res.status(200).json({ message: "Task Updated Successfully" })
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "Internal Server Error" })
    }
})
// for update  Task
router.put("/update-task/:id", authToken, async (req, res) => {
    try {
        const { id } = req.params;
        const TaskData = await Task.findById(id);
        const CompleteTask = TaskData.complete;
        await Task.findByIdAndUpdate(id, { important: !CompleteTask })
        res.status(200).json({ message: "Task Updated Successfully" })
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "Internal Server Error" })
    }
})
// for important task 
router.get("/get-imp-tasks", authToken, async (req, res) => {
    try {
        const { id } = req.headers;
        const Data = await user.findById(id).populate({
            path: "tasks",
            match: { important: true },
            options: { sort: { createdAt: -1 } }
        });
        const ImpTaskData = Data.tasks;
        res.status(200).json({ data: ImpTaskData })
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Internal Server Error" })
    }
})
// for complete tasks
router.get("/get-complete-tasks", authToken, async (req, res) => {
    try {
        const { id } = req.headers;
        const Data = await user.findById(id).populate({
            path: "tasks",
            match: { important: true },
            options: { sort: { createdAt: -1 } }
        });
        const CompleteTaskData = Data.tasks;
        res.status(200).json({ data: CompleteTaskData })
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Internal Server Error" })
    }
})
// gor incomplete Tasks
router.get("/get-incomplete-tasks", authToken, async (req, res) => {
    try {
        const { id } = req.header;
        const Data = await user.findById(id).populate({
            path: "tasks",
            match: { complete: false },
            options: { sort: { createdAt: -1 } },
        });
        const InCompleteTaskData = Data.tasks;
        res.status(200).json({ data: InCompleteTaskData })
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Internal Server Error" })
    }
})
module.exports = router;