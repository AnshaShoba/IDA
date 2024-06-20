const express=require('express')                                     
const cors=require('cors')   
const mongoose=require('mongoose')
const control=require('./Controller/controllers')
 

const app=express()                                                    
app.use(cors());  

let port=5000                                                          

app.use(express.json()) 


let data = "mongodb+srv://anshashoba01:ansha01$@cluster0.nhyflva.mongodb.net/" ;               
mongoose.set ("strictQuery",false)                                                             
mongoose.connect(data, { useNewUrlParser:true, useUnifiedTopology:true}).then((res)=>{         
    console.log("connected")
})
.catch ((res)=>{
    console.log(res,"failed")
})


app.listen(port,()=>{
    console.log(`Listening to ${port}`)
})

app.post("/receive", control.post);   