import express from "express"
import connectDB from "./lib/db.js";
import postRoute from "./routes/post.route.js"
import authRoute from "./routes/auth.route.js"
const app=express();
app.use(express.json())
connectDB();
app.use("/api/posts",postRoute)
app.use("/api/auth",authRoute)


app.listen(8800,()=>{
    console.log("Server is running at http://localhost:8800");
}
);