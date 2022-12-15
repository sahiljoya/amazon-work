import mongoose from "mongoose";
const message = new mongoose.Schema({
    massege:{
       type:String,
        required:true
    },
    senderId:{
        type:mongoose.Schema.Types.ObjectId,ref:'shecma',
        required:true
    },
    is_edit:{
        type:Boolean,
        enum:[0,1],
        default:0
    },
    is_delete:{
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
const userMessage = mongoose.model("follow",userConnete)
export default userMessage