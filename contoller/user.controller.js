import user from "../models/user.model.js";
import bcrypt from "bcrypt"
import Jwt from "jsonwebtoken";
import nodemailer from "nodemailer"
import csv from "csvtojson"
import fs from "fs"
export const sing = async (req, res) => {
    try {
        const idMach = await user.findOne({ number: req.body.number })
        if (idMach) {
            res.send({
                status: false,
                "msg": "number allready exist",
                data: {}
            })

        } else {
            var otp = Math.floor(1000 + Math.random() * 9000)
            const pass = await bcrypt.hash(req.body.password, 10)
            req.body.password = pass
            req.body.otp = otp
            const creat = await user.create(req.body)
            //console.log(otp);
            creat.token = await Jwt.sign({ time: Date(), userId: creat._id }, "khan")
            res.send({
                status: true,
                "msg": "sing successfully",
                data: creat
            })

        }
    } catch (error) {
        res.send(error)
    }
}

export const login = async (req, res) => {
    try {
        const numberMach = await user.findOne({ number: req.body.number })
        const emailMach = await user.findOne({ email: req.body.email })
        if (numberMach) {
            const machPass = await bcrypt.compare(req.body.password, numberMach.password)
            if (machPass == true) {
                numberMach.token = await Jwt.sign({ time: Date(), userid: numberMach._id }, "khan")
                // const token = await Jwt.sign({time:Date(),userid:numberMach._id},"khan")
                // numberMach.token=token
                res.send({
                    status: true,
                    "msg": "Login successfully",
                    data: numberMach
                })
            } else {
                res.send({
                    status: false,
                    "msg": "invelid password",
                    data: {}
                })
            }
        } else if (emailMach) {
            const emailpass = await bcrypt.compare(req.body.password, emailMach.password)
            if (emailpass == true) {
                emailMach.token = await Jwt.sign({ time: Date(), userid: emailMach._id }, "khan")
                // const token = await Jwt.sign({time:Date(),userid:numberMach._id},"khan")
                // numberMach.token=token
                res.send({
                    status: true,
                    "msg": "Login successfully",
                    data: emailMach
                })
            } else {
                res.send({
                    status: false,
                    "msg": "invelid password",
                    data: {}
                })
            }
        } else {
            res.send({
                status: false,
                "msj": "Your accunt is note created pleass try aggain",
                data: {}
            })
        }
    } catch (err) {
        res.send(err)
    }
}

export const alldata = async (req, res) => {
    let where = {

    }
    if (req.query.username) {
        where.username = req.query.username
    }
    if (req.query.email) {
        where.email = req.query.email
    }
    if (req.query.number) {
        where.number = req.query.number
    }
    const data = await user.find(where)
    if (data.length > 0) {
        res.send({
            status: true,
            msg: "User data fetch successfully.",
            data: data
        })
    } else {
        res.send({
            status: false,
            msg: "No data found",
            data: []
        })
    }

}
export const update = async (req, res) => {
    try {
        const up = await user.findOneAndUpdate({ _id: req.body.id }, req.body)
        if (up) {
            res.send({
                status: true,
                msg: "data update",
                data: up
            })
        } else {
            res.send({
                status: true,
                msg: "somthing wrong ",
                data: {}
            })
        }
    } catch (error) {
    }
}




export const deletedata = async (req, res) => {
    try {
        const lele = await user.findOne({ email: req.body.email })
        if (lele) {
            const word = await bcrypt.compare(req.body.password, lele.password)
            if (word == true) {
                var dele = await user.findByIdAndDelete(lele)
                res.send({
                    status: true,
                    msg: "your account delete successfully",
                    data: lele
                })
            } else {
                res.send({
                    status: false,
                    msg: "password incorrect pleass try aggain",
                    data: {}
                })
            }
        } else {
            res.send({
                status: false,
                msg: "email dose not exist",
                data: {}
            })
        }
    } catch (error) {
        res.send({
            status: false,
            msg: "something wrong",
            data: {}
        })
    }
}
export const resendOtp = async (req, res) => {
    try {
        var creOtp = Math.floor(1000 + Math.random() * 9000)
        req.body.otp = creOtp
        const sendOtp = await user.findOneAndUpdate({ number: req.body.number }, req.body)
        sendOtp.otp = req.body.otp
        if (sendOtp) {
            res.send({
                status: true,
                msg: "otp success",
                data: sendOtp
            })
        } else {
            res.send({
                status: false,
                msg: "wrong otp & number misteck",
                data: {}
            })
        }
    } catch (err) {
        res.send({
            status: false,
            msg: "somthing wring with data misteck",
            data: err
        })
    }
}
export const verifyOtp = async (req, res) => {
    try {
        const findNum = await user.findOne({ number: req.body.number, otp: req.body.otp })
        if (findNum) {
            var dataUpdate = {}
            dataUpdate.getnumberVerify = true
            await user.findByIdAndUpdate({ _id: findNum.id })
            findNum.getnumberVerify = true
            if (findNum) {
                res.send({
                    status: true,
                    msg: "otp verify successfully",
                    data: findNum
                })
            } else {
                res.send({
                    status: false,
                    msg: "otp wrong please enter writ true otp & number",
                    data: {}
                })
            }
        } else {
            res.send({
                status: false,
                msg: "number and otp note found",
                data: {}
            })
        }
    } catch (err) {
        res.send({
            status: false,
            msg: "somthing wring with data misteck",
            data: err
        })
    }
}
export const resendPass = async (req, res) => {
    try {
        const findNumber = await user.findOne({ number: req.body.number })
        if (findNumber) {
            let findPass = await bcrypt.compare(req.body.old_pass, findNumber.password)
            if (findPass) {
                var dataUpload = {}
                let createPass = await bcrypt.hash(req.body.new_pass, 10)
                dataUpload.password = createPass
                await user.findByIdAndUpdate({ _id: findNumber.id }, dataUpload)
                res.send({
                    status: true,
                    msg: "create new password",
                    data: findNumber
                })
            } else {
                res.send({
                    status: false,
                    msg: "old password wrong please enter correcte password",
                    data: {}
                })
            }
        } else {
            res.send({
                status: false,
                msg: "number is note corecte enter write corecte password",
                data: {}
            })
        }
    } catch (error) {
        res.send({
            status: false,
            msg: "somthing wring with data misteck",
            data: error
        })

    }
}
export const gmailsend = async (req, res) => {
    try {
        var otp = Math.floor(1000 + Math.random() * 9000)
        let tranpoter = nodemailer.createTransport({
            host: process.env.HOST,
            port: process.env.CODE,
            secure: false,
            requireTLS: true,
            auth: {
                user: process.env.AUTH_USER,
                pass: process.env.AUTHPASS
            }
        })
        let mailoption = {
            from: process.env.FROM,
            to: "shahbaj090khan@gmail.com",
            subject: "Verification OTP for hello.food.com",
            html: "<p>Your verification OTP is:" + otp + "</ap>"
        }
        tranpoter.sendMail(mailoption, function (err, info) {
            if (err) {
                //console.log("ERROR----", err);
            } else {
                //  console.log("INFO---", info.response);
            }
        })
        //console.log(otp)
        req.body.otp = otp
        const emailUpdate = await user.findOneAndUpdate({ email: req.body.email }, req.body)
        emailUpdate.otp = req.body.otp
        if (emailUpdate) {
            res.send({
                status: true,
                msg: "otp send",
                data: emailUpdate
            })
        } else {
            res.send({
                status: false,
                msg: "email wrong with request check out",
                data: {}
            })
        }
    } catch (err) {
        res.send({
            status: false,
            msg: "same data misteck and server ERROR with REQUESTE",
            data: err
        })
    }
}
export const ForgetPassEmail = async (req, res) => {
    try {
        const compareEmail = await user.findOne({ email: req.body.email, otp: req.body.otp })
        if (compareEmail) {
            //console.log(req.body.password);
            var pass = await bcrypt.hash(req.body.password, 10)
            //console.log(pass);
            await user.findByIdAndUpdate({ _id: compareEmail.id }, req.body)
            compareEmail.password = pass
            res.send({
                status: true,
                msg: "password forget and new password add",
                data: compareEmail
            })
        } else {
            res.send({
                status: false,
                msg: "email or otp incorte checkout ",
                data: {}
            })
        }

    } catch (err) {
        res.send({
            status: false,
            msg: "same data misteck and server ERROR with REQUESTE",
            data: err
        })
    }
}
function importUseRes(uName, number, reason, key) {
    return {
        username: uName,
        number: number,
        reason:reason,
        key:key
    }
}
export const insertUserdata = async (req, res) => {
    try {
        const jsonarray = await csv().fromFile(req.file.path)
        var rejected = []
        var success = 0
        jsonarray.forEach(async (value, key) => {
            const userFind = await user.findOne({ number: value.number })
            if (!value.number) {
                rejected.push(importUseRes(value.username, value.number, "Mobile no. can not to blenck.", key))
            } else if (!value.password) {
                rejected.push(importUseRes(value.username, value.number, "Password can not to blenck.", key))
            } else if (userFind) {
                rejected.push(importUseRes(value.username, value.number, "User is already taken", key))
            } else {
                let pass = await bcrypt.hash(value.password, 10)
                value.password = pass
                const creatuser = user.create(value)
                if (creatuser) {
                    success++
                }
            }
        });
        setTimeout(() => {
            if (success == 0) {
                res.send({
                    status: false,
                    msg: "No data inserted.",
                    //rejected_data:rejected,
                    success: success,
                    rejected_data: rejected,
                    total: jsonarray.length
                })
            } else {
                res.send({
                    status: true,
                    msg: "Data inserted succefully.",
                    //rejected_data:rejected,
                    success: success,
                    rejected_data: rejected,
                    total: jsonarray.length
                })
            }
        }, "1000");

    } catch (err) {
        res.send({
            status: false,
            msg: "some misteck for data Server error",
            data: err
        })
    }
}
export const imageUpload = async (req, res) => {
    try {
        var imagebash64 = req.body.image
        var lowerCash = imagebash64.toLowerCase()
        var extension = undefined
        if (lowerCash.indexOf("jpg") == 11 || lowerCash.indexOf("jpeg") == 11) {
            extension = 'jpg'
            var bare64Data = imagebash64.replace(/^data:image\/jpeg;base64,/, "")
        } else if (lowerCash.indexOf("png") == 11) {
            extension = 'png'
            var bare64Data = imagebash64.replace(/^data:image\/png;base64,/, "")
        }
        var imagePath = "images" + "/" + Date.now() + "." + extension
        fs.writeFile(imagePath, bare64Data, 'base64', function (err) {
            console.log(err);
            if (err) {
                res.send({
                    status: false,
                    msg: "image path error",
                    data: err
                })
            } else {
                res.send({
                    status: true,
                    msg: "image upload success",
                    data: imagePath
                })
            }
        })

    } catch (err) {
        res.send({
            status: false,
            msg: "server error",
            data: err
        })
    }
}