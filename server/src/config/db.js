import mongoose from "mongoose";

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB Conected :", conn.connection.host);
    }catch(error){
        console.log("Error connecting DB :" )
    }
};

export default connectDB;