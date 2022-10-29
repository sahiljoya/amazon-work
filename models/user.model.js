import mongoose from "mongoose";
const schema = new mongoose.Schema({
    email: {
        type: String,
        required: true
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
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    }

})
const user = mongoose.model("shecma", schema)
export default user