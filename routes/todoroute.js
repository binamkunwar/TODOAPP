const express = require("express");
const todoController = require("../controller/todo")

const router = express.Router();

router.route("/:id").delete(todoController.todoDelete)
