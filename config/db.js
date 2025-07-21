import mongoose from "mongoose";


const dbConnection=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("connection successful")
    }catch(err){
        console.error(err)
    }
}

export default dbConnection;