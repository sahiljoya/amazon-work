import prodect from "../models/prodect.model.js"

export const im = async (req, res) => {
    try {
        var imageallData = []
        req.files.forEach(image => {
            var imagetype = ''
            if (image.mimetype == 'image/png') {
                imagetype = 'png'
            } else if (image.mimetype == 'image/jpg') {
                imagetype = 'jpg'
            }
            let imageData = {
                type: imagetype,
                path: image.filename,
                fullpath: "https://hello-api-prodect.herokuapp.com" + image.path
            }
            imageallData.push(imageData)
        });
        req.body.image = imageallData
        const createData = await prodect.create(req.body)
        if (createData) {
            res.send({
                status: true,
                msg: "prodect created success",
                data: createData
            })
        } else {
            res.send({
                status: false,
                msg: 'data dot sai h sai karo',
                data: {}
            })
        }
    } catch (error) {
        res.send(error)
    }
}

export const getprodect = async (req, res) => {
    try {
        const getData = await prodect.find({ status: "Active", sub_cate_id: req.body.subCateId }).sort({ '_id': -1 })
        if (getData.length > 0) {
            res.send({
                status: true,
                msg: "Data fetch successsfiully.",
                data: getData
            })
        } else {
            res.send({
                status: false,
                msg: "Product not found.",
                data: []
            })
        }
    } catch (error) {
        res.send({
            status: false,
            msg: "SOmething wrong with request.",
            data: error
        })
    }
}
export const seachapi = async (req, res) => {
    try {
        var where = {}
        if (req.body.name) {
            where.name = req.body.name
        }
        const seachFind = await prodect.find(where).sort({ '_id': -1 })
        if (seachFind.length > 0) {
            res.send({
                status: true,
                msg: "data get",
                data: seachFind
            })
        } else {
            res.send({
                status: false,
                msg: "some mistec",
                data: {}
            })
        }
    } catch (error) {
        res.send({
            status: false,
            msg: "sarver error h chek karo kya misteck h",
            data: error
        })
        console.log(error);
    }
}