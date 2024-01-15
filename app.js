require("dotenv").config();
const express = require("express");
const app = express();
require("./db/conn");
const router = require("./routes/router");
const cors = require("cors");
const cookiParser = require("cookie-parser")
const port = 8010;


// app.get("/",(req,res)=>{
//     res.status(201).json("server created")
// });

app.use(express.json());
app.use(cookiParser());
app.use(cors({
    origin:process.env.origin,
    exposedHeaders:'Set-Cookie',
    allowedHeaders:"Content-Type,Authorization",
    methods:"GET, PUT, POST, DELETE",
    credentials:true,
}));
app.use(router);


app.listen(port,()=>{
    console.log(`server start at port no : ${port}`);
})