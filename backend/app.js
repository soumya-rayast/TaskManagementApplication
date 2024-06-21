const express = require("express");
const app = express();
require("dotenv").config();
require("./connect");
const cors = require("cors");
const UserAPI = require("./routes/user")
app.use(cors())
app.use("/",(req,res)=>{
    res.send("Hello from backend Side")
});
app.use("/api/v1",UserAPI)

const PORT = 1000;
app.listen(PORT,()=>{
    console.log("Server Started")
})