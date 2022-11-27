import sharePost from "../models/share.model.js"

export const shareUser = async(req,res)=>{
    try {
        const User = await sharePost.create(req.body)
        if (User) {
            res.send({
                status:true,
                msg:'post send success',
                data:User
            })
        }else{
            res.send({
                status:false,
                msg:"data not send",
                data:{}
            })
        }
    } catch (err) {
        res.send({
            status:false,
            msg:"Server ERROR data misteck",
            data:err
        })
    }
}