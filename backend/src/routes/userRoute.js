const express=require("express");
const {createUser}=require("../controllers/userController")
const route=express.Router()

//create user

route.post("/",createUser);



module.exports=route;