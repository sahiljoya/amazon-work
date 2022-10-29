import ratmodel from "../models/rating.model.js"

export const ratUs = async (req, res) => {
    try {
        req.body.User = req.body.user_id
        req.body.prodectId = req.body.prodect_id
        const findrat = await ratmodel.findOne({ User: req.body.User, prodectId: req.body.prodectId })
        if (findrat) {
            res.send({
                status: false,
                msg: "you are allready ratus",
                data: {}
            })
        } else {
            const createRat = await ratmodel.create(req.body)
            if (createRat) {
                res.send({
                    status: true,
                    msg: "thank You",
                    data: createRat
                })
            } else {
                res.send({
                    status: false,
                    msg: "data was wrong",
                    data: {}
                })
            }
        }
    } catch (err) {
        res.send({
            status: false,
            msg: "somthing wrong",
            data: err
        })
    }
}