const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/usermodel');
const { json } = require('body-parser');
const router = express.Router();
const auth = require('../middleware/auth')
const { route } = require('../middleware/multer');

router.get('/', (req, res, next) =>  {
    User.find().then((user) => res.json(user))
})

router.post('/signup', (req, res, next) => {
    let password = req.body.pass;
    if(!(req.body.name && req.body.pass)){
        return res.status(400).send({ error: "Data not formatted properly" });
    }
    console.log(password);
    bcrypt.hash(password, 10, function(err, hash) {
        if(err){
            let err= new Error('Could not hash');
            err.status = 500;
            return next(err);
        }
    User.create({
            name:req.body.name,
            pass: hash,
            img: req.body.img
        }).then((user) => {

            let token = jwt.sign({_id: user._id}, process.env.SECRET);
            res.json({ status: "User Created !", token: token})
        }).catch(next);
    });
})

router.post('/login', async (req, res, next) => {
   const userDetail = await User.findOne({ name: req.body.name}).then((user) => {return user;}) .catch(next);
   const userDetail2 = await User.findOne({id: userDetail._id}).then((user) => {return user;}) .catch(next); 

   console.log(req.body.pass, "lol", userDetail,userDetail2);
        const abc = await bcrypt.compare(req.body.pass, userDetail.pass)
            .then((isMatch) => {
                if(!isMatch){
                   let err = new Error("Password does not match");
                   err.status = 404;
                   next(err);
                }
                let token = jwt.sign({_id: userDetail.id}, process.env.SECRET)
                res.json({ status: 'Login success!', token: token });
                console.log("Login Sucess")
                console.log(userDetail._id);
        }).catch(next);
      
    //  }
// }) .catch(next);

})

 router.get('/me', auth.verifyUser,(req,res,next)=>{
    console.log(req.user._id, "i m routes");
    const user =User.findById(req.user.id);
    console.log("okkkkkkmkmkm");
    console.log(user)
    res.json({ status: 'Your Account is opened!'});
  res.json((JSON.stringify.user))
 
 })

//  router.get('/signout', (req, res) => {
//     // console.log(token)
//     res.clearCookie("ntoken")
//     return res.redirect('/')
//  })
// router.get('/logout',function(req,res,next){
//     req.logout(function(err){
//         if(err){
//             return next(err)
//         }
//         res.redirect('/')
//     })
    
// })

// router.get('logout',function(req,res)=>{
//     req.logout(function(err){
//         if(err){
//             return next(err)
//         }
//         res.redirect('/')
//     })
// })
    module.exports = router;