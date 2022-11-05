import mongoose from "mongoose";
const schema = new mongoose.Schema({
    email: {
        type: String,
        required: false
    },
    number: {
        type: String,
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
    token: {
        type: String,
        required: false
    },
   

})
const user = mongoose.model("shecma", schema)
export default user