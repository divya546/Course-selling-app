const express= require ('express');
const app = express();
const jsonwebtoken = require ('jsonwebtoken');


app.post('/user/login',(req,res)=>{
    res.json({
        message:"log in endpoint"
    })
     
})
app.post('/user/signin',(req,res)=>{
   res.json({
    message:"sign up endpoint"
   })
})
app.get('/user/purchase',(req,res)=>{
    //you will except some money from user
   res.json({
    message:" user purchases endpoint"
   })
}) 
app.post('/courses/purchase',(req,res)=>{
    //you will except some money from user
    res.json({
        message:"course purchase"
    })
})
app.get('/user/courses',(req,res)=>{
 res.json({
    message:"courses endpoint"
 })
})
  app.listen(3000);