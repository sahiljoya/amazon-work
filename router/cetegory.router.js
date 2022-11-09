import Express from "express";
import { cetegiri, getCetegorry } from "../contoller/cetegory.controller.js";
const atrouter = Express.Router()
atrouter.route("/backand-api/cetegory").post(cetegiri)
atrouter.route("/find/cetegory").get(getCetegorry)
export default atrouter