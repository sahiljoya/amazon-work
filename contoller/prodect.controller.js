import prodect from "../models/prodect.model.js"
import cnv from "csvtojson"
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
        const getData = await prodect.find({ status: "Active"}).sort({ '_id': -1 })
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
function importProdect(name,reason,ker) {
    return{
        name:name,
        reason:reason,
        key:key
    }
}
export const importSubcetEL = async(req,res)=>{
    try {
        const jsonArray = await cnv().fromFile(req.file.path)
        var rejected = []
        var success = 0
        jsonArray.forEach(async(value,key)=>{
            if (!value.name) {
                rejected.push(importProdect(value.name,"name is note difind",key))
            }else if (!value.price){
                rejected.push(importProdect(value.name,"price is note difind",key))
            }else if(!value.description){
                rejected.push(importProdect(value.name,"description is note difind",key))
            }else{
                const createdProdect = await prodect.create(value)
                if (createdProdect) {
                    success++
                }
            }
        })
        setTimeout(() => {
            if (success == 0) {
                res.send({
                    status: false,
                    msg: "No data inserted.",
                    //rejected_data:rejected,
                    success: success,
                    rejected_data: rejected,
                    total: jsonArray.length
                })
            } else {
                res.send({
                    status: true,
                    msg: "Data inserted succefully.",
                    //rejected_data:rejected,
                    success: success,
                    rejected_data: rejected,
                    total: jsonArray.length
                })
            }
        }, "1000");
    } catch (err) {
        res.send({
            status:false,
            msg:"server error with data misteck",
            data:err
        })
    }
}
export const popularDish = async(req,res)=>{
    try {
        const findDish = await prodect.find({is_popular:"1"}).sort({'_id':-1})
        if (findDish) {
            res.send({
                status:true,
                msg:"Popular dish get",
                data:findDish
            })
        }else(
            res.send({
                status:true,
                msg:"cant get data",
                data:{}
            })
        )
    } catch (err) {
        res.send({
            status:false,
            msg:"server error with data misteck",
            data:err
        })
    }
}