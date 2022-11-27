import Express from "express";
import { cetegiri, getCetegorry, getDataAgrigate } from "../contoller/cetegory.controller.js";
const atrouter = Express.Router()
atrouter.route("/backand-api/cetegory").post(cetegiri)
atrouter.route("/find/cetegory").get(getCetegorry)
atrouter.route("/find/agrygat").get(getDataAgrigate)
export default atrouter