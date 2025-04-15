import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

export default async function connectDb(){
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("database connected")
    } catch (error) {
         console.log(error.message)
    }
}

      