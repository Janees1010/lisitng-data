import express from "express"
import connectDb from "./dbConnection/connection.js"
import Model from "./models/model.js"
import cors from "cors"
import route from "./routes/route.js"


const app = express()
app.use(cors())

connectDb()

app.use("/",route)
app.listen(4000,()=>{
    console.log("server is spining")
}) 