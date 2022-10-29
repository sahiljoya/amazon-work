import Express from "express";
import { cetegiri } from "../contoller/cetegory.controller.js";
const atrouter = Express.Router()
atrouter.route("/all/cetegory").post(cetegiri)
export default atrouter