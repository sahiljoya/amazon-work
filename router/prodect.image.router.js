import Express from "express";
import { getprodect, im, seachapi } from "../contoller/prodect.controller.js";
import { imageUploaded } from "../servish/image.servish.js";
const imagerouter = Express.Router()
imagerouter.route("/create/prodect").post(imageUploaded.array('image', 50), im)
imagerouter.route("/get-prodect/prodect").get(getprodect)
imagerouter.route("/get-prodect/seach").get(seachapi)
export default imagerouter