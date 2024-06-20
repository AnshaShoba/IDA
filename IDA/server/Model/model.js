const mongoose=require('mongoose')                        

const useSchema=new mongoose.Schema                        
({
    Name:String,
    Email:String,                                      
    MobileNo:Number

})
const data=mongoose.model("IDA",useSchema)             
module.exports=data;   