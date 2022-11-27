import likeUser from "../models/like.models.js"
export const likeUSR = async (req, res) => {
    try {
        const likeUsr = await likeUser.create(req.body)
        if (likeUsr) {
            res.send({
                status: true,
                msg: 'Like post',
                data: likeUsr
            })
        } else {
            res.send({
                status: false,
                msg: 'cant like post',
                data: {}
            })
        }
    } catch (err) {
        res.send({
            status: false,
            msg: 'Server ERROR with data misteck',
            data: err
        })
    }
}