import Express from "express";
import router from "./router/user.router.js";
import connectDB from "./congfi/mongo.js";
import atrouter from "./router/cetegory.router.js";
import subRouter from "./router/sub.router.js";
import imagerouter from "./router/prodect.image.router.js";
const app = Express()
app.use(Express.json())
connectDB()
app.use(imagerouter)
app.use(subRouter)
app.use(atrouter)
app.use(router)
app.listen(3003, (req, res) => {
    console.log("server port:3003");
})