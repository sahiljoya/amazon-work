import mongoose from "mongoose";
const rat = new mongoose.Schema({
    User: {
        type: mongoose.Schema.Types.ObjectId, ref: "shecma",
        required: true
    },
    prodectId: {
        type: mongoose.Schema.Types.ObjectId, ref: "product",
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    review: {
        type: String,
        required: false
    },
    status: {
        type: String,
        enum: ["Active", "deactive"],
        default: "Active"
    },
    creatAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now }
})
const ratmodel = mongoose.model("rating", rat)
export default ratmodel