var mongoose = require('mongoose');
 var userSchema=new mongoose.Schema({
    name:{
      type:String,
      require:true
    },
    pass:{
      type:String,
      require:true
    },
    img:{
      type:String,
      require:true
    }
   })
 module.exports = mongoose.model('User',userSchema)