import prodect from "../models/prodect.model.js"

export const im = async (req, res) => {
    try {
        var imageallData = []
       req.files.forEach(image => {
        var imagetype = ''
        if (image.mimetype == 'png') {
            imagetype = 'png'
        }else if(image.mimetype == 'jpg'){
            imagetype = 'jpg'
        }
        let imageData = {
            type:imagetype,
            path:image.filename,
            fullpath:"https://hello-api-prodect.herokuapp.com"+image.path
        }
       res.send(imageData);
       return
        imageallData.push(imageData)
       });
       req.body.image = imageallData
       const createData = await prodect.create(req.body)
       if (createData) {
            res.send({
                status:true,
                msg:"prodect created success",
                data:createData
            })
       }else{
        res.send({
            status:false,
            msg:'data dot sai h sai karo',
            data:{}
        })
       }
    } catch (error) {
        res.send(error)
    }
}