import mongoose from "mongoose";
const Uschema = new mongoose.Schema({
    otp: {
        type: String,
        required: false
    },
    createdAt: { type: Date, default: Date.now, index: { expires: 300 } },

})
export default Uschema