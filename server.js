import express from "express"
const app = express()

app.listen(8000, (err)=>{
    if(err){
        console.log("Unable TO connect to the port 8000");
        return ;
    }
    console.log("Successfully COnnected The Port 8000")
})