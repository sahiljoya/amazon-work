import Subs from "../models/sub.model.js"

export const uploadData = async (req, res) => {
    try {
        let findData = await Subs.findOne({ name: req.body.name })
        if (findData) {
            res.send({
                status: false,
                msg: "Sub Category already exist.",
                data: {}
            })
        } else {
            let createData = await Subs.create(req.body)
            if (createData) {
                res.send({
                    status: true,
                    msg: "data add",
                    data: createData
                })
            } else {
                res.send({
                    status: false,
                    msg: "data entry not posibols",
                    data: {}
                })
            }
        }
    } catch (error) {

    }
}
export const getsub = async (req, res) => {
    try {
        const findhd = await Subs.find({ status: "Active" }).populate("createBy").populate("cateId").sort({'_id': -1})
        if (findhd) {
            res.send({
                status: true,
                msg: "data find success",
                data: findhd
            })
        } else {
            res.send({
                status: false,
                msg: "not find",
                data: {}
            })
        }
    } catch (error) {
        res.send({
            status: false,
            msg: "something wroge",
            data: error
        })
    }
}