import express from "express";

const app=express();
const port =5000;

app.get("/",(req,res)=>{
    return res.json({message:"hi server is running good"})
})

app.listen(port,()=>{
    console.log(`server is listening on port ${port}`)
})