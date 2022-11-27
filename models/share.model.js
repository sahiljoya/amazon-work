import mongoose from "mongoose";
const sharedata = new mongoose.Schema({
    product:{
        type:mongoose.Schema.Types.ObjectId,ref:"product",
        required:true
    },
    who_shared:{
        type:mongoose.Schema.Types.ObjectId,ref:"shecma"
    },
    who_received:{
        type:mongoose.Schema.Types.ObjectId,ref:"shecma"
    },
    status:{
        type:String,
        enum:["Active","deactive"],
        default:"Active"
    },
    createdAt:{type:Date,default:Date.now},
    updatedAt:{type:Date,default:Date.now},
})
const sharePost = mongoose.model('shareProduct',sharedata)
export default sharePost
