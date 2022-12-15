import mongoose from "mongoose";
const userConnete = new mongoose.Schema({
    follow:{
        type:mongoose.Schema.Types.ObjectId,ref:"shecma",
        required:true
    },
    following:{
        type:mongoose.Schema.Types.ObjectId,ref:'shecma',
        required:true
    },
    conform:{
        type:Boolean,
        enum:[0,1],
        default:0
    },
    is_block:{
        type:Boolean,
        enum:[0,1],
        default:0
    },
    status:{
        type:String,
        enum:["Active","deactive"],
        default:"Active"
    },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now }

})
const userFollow = mongoose.model("follow",userConnete)
export default userFollow