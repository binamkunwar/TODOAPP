const express = require('express');
const { default: mongoose } = require('mongoose');
const multer = require('multer');
const path = require("path");
//const connectionDb = require("./database/database")

mongoose.connect("mongodb://127.0.0.1:27017/newTodo",{useNewUrlParser:true, useUnifiedTopology: true},(err)=>{
    if(!err)console.log('db connected');
    console.log(err);
})
const storage = multer.diskStorage({
    destination: "./public/uploads",
    filename: (req, file, callback) => {
        let ext = path.extname(file.originalname);
        callback(null, `${file.fieldname}-${Date.now()}${ext}`);
    }
});
const imageFileFilter = (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return cb(new Error("You can upload only image files!"), false);
    }
    cb(null, true);
};

// const fileFilter =(req, file,cb) => {
// if(file.mimetype === 'image/jpeg'|| file.mimetype ==='image/png'){
// cb(null,true)
// }else{
//     cb(null,false)
// }
// }
const upload = multer({
    storage: storage,
    fileFilter: imageFileFilter,
    limits:{
        fileSize:1024*1024*5
    }
})

const uploadRouter = express.Router();
uploadRouter.route('/')
    .post(upload.single('imageFile'), (req, res) => {
        console.log(req.file)
        res.json(req.file.path)
            response.redirect("/")
            res.json(result)
            
    });
uploadRouter.route('/user').post(async(req,res)=>{
    multer(req,res,async(err)=>{
        if(err){
            console.log('err')
        }
        res.json({
            body:req.body,
            file:req.file
        })
    })
})
module.exports = uploadRouter