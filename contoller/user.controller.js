import user from "../models/user.model.js";
import bcrypt from "bcrypt"
import Jwt from "jsonwebtoken";
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
            const pass = await bcrypt.hash(req.body.password, 10)
            req.body.password = pass
            const creat = await user.create(req.body)
            creat.token = await Jwt.sign({ time: Date(), userId: creat._id }, "khan")
            console.log(creat);
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
                    "msg": "somthing was wrong pleass try aggain",
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
export const getOtp = async (req, res) => {
    try {
        var data = 8955
        req.body.otp = data
        const findOtp = await user.findByIdAndUpdate({ _id: req.body.id }, req.body)
        if (findOtp) {
            res.send({
                status: true,
                msg: "get otp success",
                data: findOtp
            })
        } else {
            res.send({
                status: false,
                msg: "cant get otp somedata wrong try again",
                data: {}
            })
        }
    } catch (err) {
        res.send({
            status: false,
            msg: "somthing wrong with data mistec",
            data: err
        })
    }
}