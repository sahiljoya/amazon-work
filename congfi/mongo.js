import mongoose from "mongoose";
const connectdb = async() => {
  const conect = await mongoose.connect("mongodb://localhost:27017/amazon",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  console.log("host---", conect.connection.host);
}
export default connectdb