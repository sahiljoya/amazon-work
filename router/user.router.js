import Express from "express";
import { auth } from "../midelvear/authentication.js";
import { sing, login, alldata, update, deletedata } from "../contoller/user.controller.js";
const router = Express.Router()
router.route("/khan/joya").post(sing)
router.route("/user/login").put(login)
router.route("/all/all").get(auth, alldata)
router.route("/all/update").put(auth, update)
router.route("/all/delete").delete(auth, deletedata)
export default router
