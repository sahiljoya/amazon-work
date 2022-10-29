
import ProductImages from "../models/image.prodect.js";
import prodect from "../models/prodect.model.js"

export const im = async (req, res) => {
    try {
        const old = await prodect.create(req.body)
        if (old) {
            req.files.forEach(async (image, key) => {
                var imagetype = ''
                if (image.mimetype == "image/png") {
                    imagetype = 'png'
                } else if (image.mimetype == 'image/jpeg') {
                    imagetype = 'jpeg'
                }
                let imageData = {
                    type: imagetype,
                    path: image.filename,
                    fullpath: "localhost:3003/" + image.path,
                    productId: old._id
                }
                await ProductImages.create(imageData)
            });
            res.send({
                status: true,
                data: old
            })
        }
    } catch (error) {
        res.send(error)
    }
}