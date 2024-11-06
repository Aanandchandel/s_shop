const User=require("../models/userModel")

const createUser=async(req,res)=>{
    try{
        const data=req.body;
        console.log(req)
        const user=await User.create(data);
        console.log("reacting");
        res.status(200).json({message:"created"})
    }catch(err){
        res.status(500).json({message:err})
    }

}
module.exports={createUser}