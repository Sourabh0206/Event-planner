import dotenv from "dotenv";
dotenv.config();

import express from "express";
import morgan from "morgan";
import ConnectDB from "./src/config/db.js";
import Authrouter from "./src/routes/authRoutes.js";
// import { sample } from "./src/middlewares/authMiddleware.js";

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/auth", Authrouter);

app.get("/", (req, res) => {
    res.json({ message: "Server Connected" });
});

app.use((err,req,res,next)=>{
    const errorMessage = err.message || "Internal Server Error" 
    const errorCode = err.statusCode || 500
    res.status(errorCode).json({message:errorMessage})
})


const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log("Server Started at", port);
    ConnectDB();
});