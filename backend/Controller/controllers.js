const datas=require('../Model/model')


exports.post=(async(req,res)=>{                                       
  
    const{Name,MobileNo,Email}=req.body;                        
    
 try{
                                     
    let user = new datas({Name,Email,MobileNo});                  
        user.save()                                                           
    res.send({message:"success",
        statuscode:200,
        data:user                                 
    })
 }
 
 
 catch(error){
 res.send({message:"Error",
    statuscode:500
 })
 console.log(error)
 }})