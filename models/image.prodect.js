import mongoose from "mongoose";
const Imageid = new mongoose.Schema({
    path: {
        required: true,
        type: String
    },
    fullpath: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["Active", "Deactive"],
        default: "Active"
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
})
export default Imageid;