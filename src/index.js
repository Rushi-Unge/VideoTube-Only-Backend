import dotenv from "dotenv";
import { app } from "./app.js";
import connecctDB from "./db/index.js";

dotenv.config({
  path: "./.env"
});

const PORT = process.env.PORT || 8001

connecctDB()
.then(() => {
    console.log(`Server is running on ${PORT}`);
    
})
.catch((err) => {
    console.log("Mongodb connection error",err);
    
})