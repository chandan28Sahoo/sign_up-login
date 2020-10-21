const creatUser=require("./user.controler");
const router =require('express').Router();
router.post('/',creatUser);
module.exports=router;


module.exports = function(router,jwt){
    router.post('/sign',(req,res)=>{
        let user = {
            "firstName":"vishal",
            "lastName":"kumar",
            "gender":"male",
            "email":"vishal@gmail.com",
            "password":"12345"
        }
        let token = jwt.sign({email:user.email,password:user.password},'secretkey')
        console.log(token);
        importdata('registration').insert(user)
        .then((result)=>{
            console.log(result);
            if(result){
                res.send("your account has been created succersfully")
            }else{
                res.send("somthing error \n please try again")
            }
        }).catch((err)=>{console.log(err);})
            
        
    });

    router.post('/login',(req,res)=>{
        let user = {
            email:"vishl@gmail.com",
            password:"12345"
        }
        let decode = jwt.verify(req.headers.authorization,'secretkey')
        if(user.email == decode.email){
            if(user.password == decode.password){
                res.send("login succesfully")
            }else{
                res.send("Invalid password")
                // console.log("Invalid password");
            }
        }else{
            res.send("Invalid mail")
            // console.log("Invalid mail");
        }
    })
}
