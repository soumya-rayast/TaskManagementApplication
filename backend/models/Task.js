const mongoose = require("mongoose");
const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true,'Title is required'],
        unique: true,
    },
    desc: {
        type: String,
        required: [true,'Description is required'],
    },
    important: {
        type: Boolean,
        default: false,
    },
    complete: {
        type: Boolean,
        default: false,
    },

}, { timestamps: true });
module.exports = mongoose.model("Task", TaskSchema);