import Express from "express";
import { auth } from "../midelvear/authentication.js";
import { sing, login, alldata, update, deletedata, 
resendOtp, verifyOtp, resendPass, gmailsend, 
ForgetPassEmail } from "../contoller/user.controller.js";
const router = Express.Router()
router.route("/user/sing").post(sing)
router.route("/user/login").put(login)
router.route("/user/get").get(auth, alldata)
router.route("/user/update").put(auth, update)
router.route("/user/delete").delete(auth, deletedata)
router.route("/user/otp-resend").get(resendOtp)
router.route("/user/otp-verify").get(verifyOtp)
router.route("/user/cange-pass").post(resendPass)
router.route("/user/send-email.otp").post(gmailsend)
router.route("/user/otp-verify-password-forget-email").put(ForgetPassEmail)
export default router
