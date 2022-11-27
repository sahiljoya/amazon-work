import Express from "express";
import { getsub, producteListe, uploadData } from "../contoller/sub.controller.js";
const subRouter =Express.Router()
subRouter.route("/sub/create").post(uploadData)
subRouter.route("/sub/get").get(getsub)
subRouter.route("/sub/producetList").get(producteListe)
export default subRouter