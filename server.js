const express = require("express")
const app = express()


app.get("/",(req,res) => {
    res.send("hello World")
})

app.listen(8089,()=>{
    console.log("started")
})
