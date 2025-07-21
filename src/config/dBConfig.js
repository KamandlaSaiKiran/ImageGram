import mongoose from "mongoose";
import { DB_URL } from "./ServerConfig.js";

export default async function connectDB(){
    try{
        await mongoose.connect(DB_URL);//this is how we connect to the MONGODB Server
        console.log("Connected to MongoDb");
    }
    catch(error){
        console.log("Something went wrong");
        console.log(error);
    }
}