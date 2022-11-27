import mongoose from "mongoose";
const likePro = new mongoose.Schema({
    like:{
        type:Boolean,
        enum:[0,1],
        default:0,
        required:true
    },
    likeby:{
        type:mongoose.Schema.Types.ObjectId,ref:"shecma"
    },
    producte:{
        type:mongoose.Schema.Types.ObjectId,ref:"product"
    },
    status:{
        type:String,
        enum:["Active","deactive"],
        default:"Active"
    },
    createdAt:{type:Date,default:Date.now},
    UpdatedAt:{type:Date,default:Date.now}
})
const likeUser = mongoose.model("likeUser",likePro)
export default likeUser