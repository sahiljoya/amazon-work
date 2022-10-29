import mongoose from "mongoose";
const connectdb = async() => {
  const conect = await mongoose.connect("mongodb+srv://prod:kRLBu5y1QFnt6D3g@cluster0.wwmlxzf.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  console.log("host---", conect.connection.host);
}
export default connectdb