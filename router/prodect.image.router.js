import Express from "express";
import { im } from "../contoller/prodect.controller.js";
import { imageUploaded } from "../servish/image.servish.js";
const imagerouter = Express.Router()
imagerouter.route("/image/image").post(imageUploaded.array('image', 50), im)
export default imagerouter