import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";

// app config
const app = express();
const port = 4000;


// middleware
app.use(cors());
app.use(express.json());

// db connection
connectDB();

app.get("/", (req, res) => {
    res.send("API is working")
})

app.listen(port,()=>{
    console.log(`Server started  on http://localhost:${port}`)
})

// mongodb+srv://sahooanshuman1205_db_user:<db_password>@cluster0.fmkisq8.mongodb.net/?