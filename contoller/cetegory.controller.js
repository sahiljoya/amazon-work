import cetUser from "../models/cetegory.model.js"

export const cetegiri = async (req, res) => {
    try {
        const trick = await cetUser.findOne({ name: req.body.name })
        if (trick) {
            res.send("name allready h")
        }else{
            const teck = await cetUser.create(req.body)
            res.send({
                status:true,
                msg:"data add successfully",
                data:teck
            })
        }
    } catch (error) {
        res.status(401).send({
            status:false,
            msg:"sonthing wrong",
            data:error
        })
    }
}