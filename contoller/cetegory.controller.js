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
export const getDataAgrigate = async(req,res)=>{
   // try {
        const data = await cetUser.aggregate([
            {
                $match:{
                   name:{ $regex: req.query.search}
                }
               
            },
            {
                "$lookup":{
                    "from":"sub.cotegiris",
                    "localField":"_id",
                    "foreignField":"cateId",
                    "as":"subCetegory"
                }
            },
            {
                "$unwind":{
                    path:"$subCetegory",
                    preserveNullAndEmptyArrays:true
                }
            },
            {$limit:Number(10)},
            // {$group:{
            //     _id:{name:"$name"}
            // }}
        ])
        console.log("data----",data)
        res.send({
            status:true,
            msg:"AgryGate is pipeline conction DATA GET SUCCESSFULLY",
            data:data
        })
    // } catch (err) { 
    //     res.send({
    //         status:false,
    //         msg:'server ERROR',
    //         data:err
    //     })
    // }
}

