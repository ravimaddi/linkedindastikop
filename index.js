const express =require('express')
const cors = require('cors')
const app=express()
app.use(express.json())
app.use(cors())
const port = process.env.PORT || 3015;
const path = require('path')

app.use(express.static(path.join(__dirname,"client/build"))) 
app.get("*",(req,res) => { 
    res.sendFile(path.join(__dirname + "/client/build/index.html")) 
})
app.listen(port,function(){
    console.log('listening on the port',port)
})