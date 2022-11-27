import Express from "express";
import { commentUser, findcommet } from "../contoller/comment.controller.js";
const commentRouter = Express.Router()
commentRouter.route("/user/comment-prouduct").post(commentUser)
commentRouter.route("/user/comment-prouduct-find").post(findcommet)
export default commentRouter