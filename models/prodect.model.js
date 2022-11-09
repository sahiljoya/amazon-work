import mongoose from "mongoose";
import Imageid from "./image.prodect.js";
const prodect = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId, ref: 'shecma'
    },
    sub_cate_id: {
        type: mongoose.Schema.Types.ObjectId, ref: 'sub.cotegiris'
    },
    is_popular: {
        type: Boolean,
        default: 0
    },
    description: {
        type: String,
        required: true
    },
    image:[Imageid],
    status: {
        type: String,
        enum: ["Active", "Deactive"],
        default: "Active"
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
})
const Product = mongoose.model("product", prodect);
export default Product;