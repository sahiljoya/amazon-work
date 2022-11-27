import mongoose from "mongoose";
const commentSchema = new mongoose.Schema({
    commentedBy:{
        type:mongoose.Schema.Types.ObjectId,ref:"shecma"
    },
    comment:{
        type:String,
        required:true
    },
    producte:{
        type:mongoose.Schema.Types.ObjectId,ref:"product"
    },
    status:{
        type:String,
        enum:["Active","inactive"],
        default:"Active"
    },
    CreatedAt:{type:Date,default:Date.now},
    UpdateAt:{type:Date,default:Date.now}
})
const comments =mongoose.model("comment",commentSchema)
export default comments