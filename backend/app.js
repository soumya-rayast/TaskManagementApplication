const express = require("express");
const cors = require("cors");
const UserAPI = require("./routes/user");
const TaskAPI = require("./routes/task")
const app = express();
require("dotenv").config();
require("./connect");

app.use(cors());
app.use(express.json());

app.use("/api/v1",UserAPI);
app.use("/api/v2",TaskAPI);

app.use("/",(req,res)=>{
    res.send("Hello from backend Side");
});

const PORT = process.env.PORT || 1000;

app.listen(PORT,()=>{
    console.log("Server Started")
})