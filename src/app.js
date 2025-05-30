import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(
    cors({
        origin:process.env.CORS_ORIGIN,
        credentials:true
    })
)

// common middleware 
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(cookieParser())
app.use(express.static("public"))

//import routes
import healthcheckRoute from "./routes/healthCheck.routes.js";
import userRouter from "./routes/user.routes.js";


// routes
app.use("/api/v1/healthcheck",healthcheckRoute)
app.use("/api/vi/users",userRouter)

export { app } 