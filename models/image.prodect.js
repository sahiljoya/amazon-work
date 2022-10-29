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
    productId: {
        type: mongoose.Schema.Types.ObjectId, ref: "product",
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
const ProductImages = mongoose.model("imageProdect", Imageid);
export default ProductImages;