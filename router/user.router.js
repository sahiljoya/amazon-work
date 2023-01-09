import Express from "express";
import { auth } from "../midelvear/authentication.js";
import {
    sing, login, alldata, update, deletedata,
    resendOtp, verifyOtp, resendPass, gmailsend,
    ForgetPassEmail, insertUserdata, imageUpload
} from "../contoller/user.controller.js";
import { userExcel } from "../servish/image.servish.js";
const router = Express.Router()
router.route("/user/sing").post(sing)
router.route("/user/login").put(login)
router.route("/user/get").get( alldata)
router.route("/user/update").put(auth, update)
router.route("/user/delete").delete(auth, deletedata)
router.route("/user/otp-resend").post(auth, resendOtp)
router.route("/user/otp-verify").post(auth, verifyOtp)
router.route("/user/cange-pass").post(auth, resendPass)
router.route("/user/send-email-otp").post(auth, gmailsend)
router.route("/user/otp-verify-password-forget-email").put(auth, ForgetPassEmail)
router.route("/user/data-insert").post(userExcel.single("images"),insertUserdata)
router.route("/user/image-upload").post(imageUpload)
export default router
