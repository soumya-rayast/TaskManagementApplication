const mongoose = require("mongoose");
require("dotenv").config();
const connect = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to DB");
    } catch (error) {
        console.error("Error connecting to database:", error);
        process.exit(1);
    }
}
connect();
module.exports = connect;