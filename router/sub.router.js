import Express from "express";
import { getsub, uploadData } from "../contoller/sub.controller.js";
const subRouter =Express.Router()
subRouter.route("/sub/create").post(uploadData)
subRouter.route("/sub/get").get(getsub)
export default subRouter