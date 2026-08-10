import express from "express";
import cors from "cors";

// app config
const app = express();
const port = 4000;


// middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("API is working")
})

app.listen(port,()=>{
    console.log(`Server started  on http://localhost:${port}`)
})