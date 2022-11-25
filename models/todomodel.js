const { CancellationToken } = require("mongodb");
const  mongoose  = require("mongoose")
var todoSchema =new mongoose.Schema ({
    todo:{
        type:String,
        require:true
    },
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})
 module.exports = mongoose.model('Todo',todoSchema)
 
