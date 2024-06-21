const { Router } = require("express");
const user = require("../models/User");
const router = require("express").Router();
router.post("/sign-in", async (req, res) => {
    try {
        const { username } = req.body;
        const { email } = req.body;
        const existingUser = await user.find({ username: username });
        const existingEmail = await user.find({ email: email });
        if (existingUser) {
            return res.status(400).json({ message: "username already exists" });
        } else if (username < 4) {
            return res.status(400).json({ message: "username should have atleast 5 characters" });
        }
        if (existingEmail) {
            return res.status(400).json({ message: "Email already exists" });
        }
        const newUser = new user({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });
        await user.save();
        return res.status(200).json({ message: "SignIn Successfully" })
    } catch (err) {
        console.log(err)
        return res.status(400).json({ message: "Internal Server Error" });
    }
});
module.exports = router;