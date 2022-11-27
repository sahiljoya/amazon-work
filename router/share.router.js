import Express from "express";
import { shareUser } from "../contoller/share.controller.js";
const shareRouter = Express.Router()
shareRouter.route("/user/share/post").post(shareUser)
export default shareRouter