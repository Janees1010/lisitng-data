import express from "express"
const route = express.Router()
import {fetchData} from "../controller/controller.js"

route.get("/getData",fetchData)

export default route