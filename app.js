const express = require("express")
const app2 = express()
const app= express()
const bodyParser =require("body-parser")
const path = require('path')
const mongoose =require("mongoose")
const uploadRouter = require('./middleware/multer')
const userRouter = require('./controller/user');
const todoRouter = require('./routes/todoroute')
const env = require('dotenv').config();
const multer = require("./middleware/multer")
const auth = require('./middleware/auth');
const connectionDb = require("./config/database/database")
connectionDb();
app2.use(bodyParser.urlencoded({extended:true}))
app2.use(express.json());
app2.use(express.static(__dirname + "/public"));
app2.use('/hello', uploadRouter)
app2.use('/uploads',uploadRouter)
app2.use('/uploads',express.static('imageFile'))
app2.use('/user',userRouter)
app2.use('/todo', auth.verifyUser ,todoRouter)
app2.listen(3000,function(){
console.log("App Listening on port 3000")
})

    
