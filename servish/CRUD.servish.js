export const create = async(req,res)=>{
    try {
        const userCreat = await user.create(req.body)
       if (userCreat) {
        res.send({
            status:true,
            msg:"create data",
            data:userCreat
        })
       }return;
       res.send({
        status:false,
        msg:"some data mistec",
        data:{}
       })
    } catch (err) {
        res.send({
            status:false,
            msg:"data misteck",
            data:err
        })
    }
}
export const Read = async(res,res)=>{
    try {
        const findUser = await findOne(req.body)
        if (findUser) {
            res.send({
                status:true,
                msg:'data update ',
                data:findUser
            })
        }else{
            res.send({
                status:false,
                msg:'not update data',
                data:{}
            })
        }
    } catch (err) {
        res.send({
            status:false,
            msg:'SERVER ERROR',
            data:err
        })
    }
}
export const update = async(req,res)=>{
    try {
        const updateUser = await findOneAndUpdate(req.body)
        if (updateUser) {
            res.send({
                status:true,
                msg:'data update ',
                data:updateUser
            })
        }else{
            res.send({
                status:false,
                msg:'not update data',
                data:{}
            })
        }
    } catch (err) {
        res.send({
            status:false,
            msg:'SERVER ERROR',
            data:err
        })
    }
}
export const deleteApi = async(req,res)=>{
    try {
        const deleteUser = await findByIdAndDelete(req.body)
        if (deleteUser) {
            res.send({
                status:true,
                msg:'data update ',
                data:deleteUser
            })
        }else{
            res.send({
                status:false,
                msg:'not update data',
                data:{}
            })
        }
    } catch (err) {
        res.send({
            status:false,
            msg:'SERVER ERROR',
            data:err
        })
    }
}