const express=require('express');

const app=express();
app.use(express.json());
const jwt=require('jsonwebtoken');
const router = express.Router()
app.get('/',(req,res)=>{
    res.json({
        secuess:"its working"
    });
})
app.use('/',router)
require('./user/user')(router,jwt);

app.listen(4000,()=> console.log("running port is 5000"));











































// app.post('/api/post',(req,res)=>{
//     jwt.verify(req.headers.authorization,'secretkey',(err,authData)=>{
//         if (err){
//             res.sendStatus(403);
//         }else{
//             res.json({
//                 message:"post created",
//                 authData
//             });
//         }

//     })
   
// })
// app.post('/api/login',(req,res)=>{
//     const user={
//         id:1,
//         username:"vishal",
//         email:"chandan@gmail.com"
//     };
//     jwt.sign({user:user},'secretkey',(err,token)=>{
//         res.json({
//             token
//         });
//     })
// })
// verify token Bearer
// function verifyToken(req,res,next){
//     // get auth header value

//     const authHeader = req.headers.authorization;
//     if (typeof authHeader!==undefined){
//         // get the token from array
//         const bearertoken = authHeader.split(' ')[1];
//         res.token=bearertoken;
//         next();
//     }else{
//         res.sendStatus(403);    
//     }
// }

