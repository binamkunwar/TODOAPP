const express = require("express");
const router = require("../controller/todo");
const uploadRouter = require('./middleware/multer')
const userRouter = require('./routes/user');
router("/signup").post(userRouter)
router("/login").post(userRouter)
router("/me").get(userRouter)
