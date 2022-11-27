import comments from "../models/comment.models.js"
export const commentUser = async (req, res) => {
    try {
    const createComment = await comments.create(req.body)
    if (createComment) {
        res.send({
            status: true,
            msg: "commented success",
            data: createComment
        })
    } else {
        res.send({
            status: false,
            msg: 'cant comment try aggain',
            data: {}
        })
    }
     } catch (err) {
        res.send({
            status:false,
            msg:"Error with data misteck",
            data:err
        })
     }
}
export const findcommet = async (req, res) => {
    try {
    const createComment = await comments.find(req.body).populate("commentedBy").populate("producte")
    if (createComment) {
        res.send({
            status: true,
            msg: "commented success",
            data: createComment
        })
    } else {
        res.send({
            status: false,
            msg: 'cant comment try aggain',
            data: {}
        })
    }
     } catch (err) {
        res.send({
            status:false,
            msg:"Error with data misteck",
            data:err
        })
     }
}