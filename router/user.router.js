import Express from "express";
import { auth } from "../midelvear/authentication.js";
import { sing, login, alldata, update, deletedata, getOtp } from "../contoller/user.controller.js";
const router = Express.Router()
router.route("/user/sing").post(sing)
router.route("/user/login").put(login)
router.route("/user/get").get(auth, alldata)
router.route("/user/update").put(auth, update)
router.route("/user/delete").delete(auth, deletedata)
router.route("/user/otp").post(getOtp)
export default router
