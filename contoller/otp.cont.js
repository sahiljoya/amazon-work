import nodemailer from "nodemailer"
import user from "../models/user.model.js"
export const getOtp = async (req, res) => {
    var otp = Math.floor(1000 + Math.random() * 9000)
    var tranpoter = nodemailer.createTransport({
        host: process.env.HOST,
        port: process.env.CODE,
        // secure:process.env.SECURE,
        // REQUIRETLS:process.env.REQUIRETLS,
        secure: false,
        requireTLS: true,
        auth: {
            user: process.env.AUTH_USER,
            pass: process.env.AUTHPASS
        }
    })
    var mailoption = {
        from: process.env.FROM,
        to: req.body.email,
        subject: "Verification OTP for pixels.com",
        html: "<p>Your verification OTP is:" + otp + "</ap>"
    }
    tranpoter.sendMail(mailoption, function (err, info) {
        if (err) {
            console.log("error--", err);
        }
    })
    req.body.otp = otp
    const createOtp = await user.findByIdAndUpdate({ _id: req.body.id }, req.body)
    if (createOtp) {
        res.send({
            status: true,
            msg: "otp get successfully",
            data: createOtp
        })
    } else {
        res.send({
            status: false,
            msg: "cant get otp some misteck",
            data: {}
        })
    }
}