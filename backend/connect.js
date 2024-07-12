const mongoose = require("mongoose");
const connect = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to DB");
    } catch (error) {
        console.error("Error connecting to database:", error);
        process.exit(1);
    }
}
connect();
module.exports = connect;