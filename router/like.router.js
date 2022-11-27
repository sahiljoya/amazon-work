import Express from "express";
import { likeUSR } from "../contoller/like.controller.js";
const likeRouter = Express.Router()
likeRouter.route("/user/like/product").post(likeUSR)
export default likeRouter