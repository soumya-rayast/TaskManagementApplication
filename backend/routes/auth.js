const jwt = require("jsonwebtoken");
const authToken = (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        if(!authHeader) {
            return res.status(401).json({message:"Authorization header is required"})
        }
        const token = authHeader.split(" ")[1];
        if (!token) {
            return res.status(401).json({ message: "Authentication is required" });
        }
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                return res.status(403).json({ message: "Invalid Token" })
            }
            req.user = user;
            next();
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal Server Error" })
    }
}
module.exports = {authToken}