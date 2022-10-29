import Express from "express";
import { ratUs } from "../contoller/rating.controler.js";
const ratRouter = Express.Router()
ratRouter.route("/rat/data").post(ratUs)
export default ratRouter