import mongoose from "mongoose";
const Uschema = new mongoose.Schema({
    getnumberVerify: {
        type: String,
        required: false,
       
    },
    getemailVerify: {
        type: String,
        required: false,
        enum: ["verify", "notVerify"],
        default: "verify"
    },
    otp: {
        type: String,
        required: false
    },
    createdAt: { type: Date, default: Date.now, index: { expires: 600 } },

})
export default Uschema