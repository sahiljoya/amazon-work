import Express from "express";
import { getprodect, im, importSubcetEL, popularDish, seachapi, } from "../contoller/prodect.controller.js";
import { imageUploaded,userExcel } from "../servish/image.servish.js";
const imagerouter = Express.Router()
imagerouter.route("/create/prodect").post(imageUploaded.array('image', 50), im)
imagerouter.route("/get-prodect/prodect").get(getprodect)
imagerouter.route("/get-prodect/seach").get(seachapi)
imagerouter.route("/get-prodect/popular-dish").get(popularDish)
imagerouter.route("/excel/prodect").post(userExcel.single("procet"),importSubcetEL)
export default imagerouter