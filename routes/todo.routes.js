const express = require('express');
const router = express.Router();
const TodoController = require('../controllers/todo.controller');

router.post('/', TodoController.createTodo).get('/', TodoController.getTodos);

module.exports = router;