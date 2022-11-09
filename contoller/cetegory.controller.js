import cetUser from "../models/cetegory.model.js"
export const cetegiri = async (req, res) => {
    try {
        const trick = await cetUser.findOne({ name: req.body.name })
        if (trick) {
            res.send({
                status: false,
                msg: "cetegorry already existing",
                data: {}
            })
        } else {
            const misteck = await cetUser.create(req.body)
            res.send({
                status: true,
                msg: "cetegorry created",
                data: misteck
            })
        }
    } catch (error) {
        res.status(401).send({
            status: false,
            msg: "sonthing wrong",
            data: error
        })
    }
}
export const getCetegorry = async (req, res) => {
    try {
        const findCat = await cetUser.findOne({ name: req.body.name })
        if (findCat) {
            res.send({
                status: true,
                msg: "cetegorry find success",
                data: findCat
            })
        } else {
            res.send({
                status: false,
                msg: "can't find cetegorry",
                data: {}
            })
        }
    } catch (error) {
        res.status(401).send({
            status: false,
            msg: "sonthing wrong",
            data: error
        })
    }
}