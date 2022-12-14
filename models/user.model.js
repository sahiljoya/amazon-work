import mongoose from "mongoose";
const ss = new mongoose.Schema({
    email: {
        type: String,
        required: false
    },
    number: {
        type: Number,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    getnumberVerify:{
        type:String,
        required:false,
        default:false
    },
    getemailVerify:{
       type:String,
       required:false,
       default:false 
    },
    otp:{
        type:Number,
        required:false
    },
    token: {
        type: String,
        required: false
    },
    status: {
        type: String,
        enum: ["Active", "deActive"],
        default: "Active"
    },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now }

})
const user = mongoose.model("shecma", ss)
export default user