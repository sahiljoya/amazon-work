import Express from "express";
import router from "./router/user.router.js";
import connectDB from "./congfi/mongo.js";
import atrouter from "./router/cetegory.router.js";
import subRouter from "./router/sub.router.js";
import imagerouter from "./router/prodect.image.router.js";
import { config } from "dotenv";
import ratRouter from "./router/rating.router.js";
import commentRouter from "./router/comment.router.js";
import likeRouter from "./router/like.router.js";
import shareRouter from "./router/share.router.js";
const app = Express()
app.use(Express.json())
connectDB()
config()
app.use(imagerouter)
app.use(subRouter)
app.use(atrouter)
app.use(router)
app.use(ratRouter)
app.use(commentRouter)
app.use(likeRouter)
app.use(shareRouter)
app.set('view engine', 'ejs');
app.get('/home/:room/:user', function(req, res) {
    res.render('pages/index',{"room" :req.params.room,"user" :req.params.user});
  });

app.listen(process.env.PORT ||  3003, (req, res) => {
    console.log("server port:3003");
})