const user = require("../models/User");
const router = require("express").Router();
const bcrypt = require("bcryptjs"); 
const jwt = require("jsonwebtoken");
//sign-in API
router.post("/sign-in", async (req, res) => {
    try {
        const { username,email ,password } = req.body;
        if(!username|| !password || !email){ return res.status(400).json({message:"All fields are required"})}
        
        if (username.length < 5) {return res.status(400).json({ message: "username should have at least 5 characters" }); }
        const existingUser = await user.findOne({ username: username });
        const existingEmail = await user.findOne({ email: email });
        if (existingUser) {return res.status(400).json({ message: "username already exists" }); }     
        if (existingEmail) {return res.status(400).json({ message: "Email already exists" });}           
        
        const hashPassword =  await bcrypt.hash(req.body.password,10)
        const newUser = new user({
            username,
            email,
            password:hashPassword,
        });
        await newUser.save();
        return res.status(200).json({ message: "SignIn Successfully" })
    } catch (err) {
        console.log(err)
        return res.status(500).json({ message: "Internal Server Error" });
    }
});
router.post("/log-in", async (req,res)=>{
    try {
    const {username ,password} = req.body;
    if(!username || !password) return res.status(400).json({message:"All Fields are required"})
    
        const existingUser = await user.findOne({username:username});
    if(!existingUser)return res.status(400).json({message :"Username or password is incorrect"});
    
    const isPasswordValid = await bcrypt.compare(password,existingUser.password);
    if(!isPasswordValid) return res.status(400).json({message:"Invalid credentials"});
    
    const authClaims = {id:existingUser._id,username:existingUser.username};
    const token = jwt.sign(authClaims,process.env.JWT_SECRET,{expiresIn:"2d"});
    
    return res.status(200).json({message:"Log-in successfully",id:existingUser._id,token})
    } catch (err) {
        console.log(err)
        return res.status(500).json({message:"Internal Server Error"})
    }
})
module.exports = router;