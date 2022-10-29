import mongoose from "mongoose";
const sub = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    createBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "shecma"
    },
    cateId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "cotegiris"
    },
    status: {
        type: String,
        enum: ["Active", "deActive"],
        default: "Active"
    },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now }
})
const Subs = mongoose.model("sub.cotegiris", sub)
export default Subs