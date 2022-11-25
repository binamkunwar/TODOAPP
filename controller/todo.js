const express = require('express');
const { route } = require('../middleware/multer');
const router = express.Router();
const Todo = require('../models/todomodel')
const User = require('../models/usermodel');
const { request, response, Router } = require('express');

// router.route('/').get((request,response) => {
//     const task = Todo.findOne()
//    response.json(task)
// })

// router.route('/add').post((request,response) =>{
//     const userId = request.user._id;
//     console.log(userId);
//     const todo = Todo.create({ todo : request.body.todo , user : userId}).then((result) => {
//         console.log(result);
//         // console.log(userId)
//         //response.send("ToDo added Sucessfully")
//         response.json(result)
//     })
// })

// router.route('/getTask').get((request,response)=>{
//     const userId = request.user._id
//     console.log(userId);
//     const task =  Todo.find({user: userId})
//     .then((result)=>{
//         response.json(result)
//     })
// })

const todoDelete = (id) => {
   
   const todo = Todo.findByIdAndDelete(id);
   response.send("deleted")

    

 
// router.route('/get').delete((request, response) => {


// })
    
// // router.route("/").delete((res,req) => {
// //     console.log("i am here");
// //     console.log(req.params.id, "id");
// //    //res.json({})
// // })


// router.route('/:id').put((request,response)=>{
//     console.log(request.params.id,"jkjkjkj",request.body);
//     const updatedtask =  Todo.findByIdAndUpdate({_id:request.params.id},{"todo": request.body.todoValue}) 
//     .then(result => {
//         response.json(result)
//         // response.json(result)
//     })

}
    

module.exports =  { todoDelete}