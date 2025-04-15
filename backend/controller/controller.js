import {fetchDataByCategory} from "../service/service.js"

export const fetchData = async (req,res)=>{
    try {
        const {category,page} = req.query;
        console.log(req.query,"q")
        if(!category) return res.status(400).json("category required")
        const data =  await fetchDataByCategory(category,page)
    return res.status(200).json(data)
    } catch (error) {
        return res.status(200).json(error.message)
    }
}