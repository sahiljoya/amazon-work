import Express from "express";
import { getOtp } from "../contoller/otp.cont.js";
const otprouter = Express.Router()
otprouter.route("/user/otp").post(getOtp)
export default otprouter
