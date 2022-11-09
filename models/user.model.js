import mongoose from "mongoose";
import Uschema from "./otp.model.js";
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
    // getnumberVerify:{
    //     type:String,
    //     required:false,
    //     default:false
    // },
    // getemailVerify:{
    //    type:String,
    //    required:false,
    //    default:false 
    // },
    otp:{Uschema},
    token: {
        type: String,
        required: false
    }
})
const user = mongoose.model("shecma", ss)
export default user