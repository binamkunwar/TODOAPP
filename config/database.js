const mongoose = require("mongoose")

const connectionDb = function() {
    const connectDb = mongoose.connect("mongodb://127.0.0.1:27017/newTodo",{useNewUrlParser:true, useUnifiedTopology: true, useCreateIndex:true},(err)=>{
    if(!err)console.log('db connected');
    console.log(err);
})

}

module.exports =connectionDb;