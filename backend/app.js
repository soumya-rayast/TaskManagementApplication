const express = require("express");
const cors = require("cors");
const UserAPI = require("./routes/user");
const app = express();
require("dotenv").config();
require("./connect");


app.use(cors());
app.use(express.json());

app.use("/api/v1",UserAPI);

app.use("/",(req,res)=>{
    res.send("Hello from backend Side");
});

const PORT = process.env.post || 1000;

app.listen(PORT,()=>{
    console.log("Server Started")
})