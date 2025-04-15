import mongoose from "mongoose"

const schema = mongoose.Schema({
    name:{
        type:String
    },
    category:{
        type:String
    },   
    description:{
        type:String
    }
})

export default mongoose.model("Data", schema);

