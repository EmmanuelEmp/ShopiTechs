import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();



const connectDB = async () =>{
    try {
        console.log('MongoDB URI', process.env.MONGO_URI);

        const conn =   await mongoose.connect(process.env.MONGO_URI, {
            
        } );
        console.log(`mongoDB connected: ${conn.connection.host}`)
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);   
    }
};
export default connectDB