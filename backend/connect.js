const mongoose = require("mongoose");
const connect = async () =>{
    try {
       const response = await mongoose.connect(`${process.env.MONGO_URL}`)
        if(response){
            console.log("COnnected to DB")
        }
    } catch (error) {
        console.log(error);
    }
}
connect;