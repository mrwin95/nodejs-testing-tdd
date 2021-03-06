const TodoModel = require('../models/todo.model');

exports.createTodo =  async (req, res, next) => {
  try {
    const createModel = await TodoModel.create(req.body);
    res.status(201).json(createModel);
  }catch(err){
    next(err);
  }
}

exports.getTodos = async (req, res, next) => {
  
  try{
    const todosModel = await TodoModel.find({});
    res.status(200).json(todosModel);
  }catch(err){
    next(err);
  }
};

exports.getTodoById = async (req, res, next) => {
  try{
    const todoModel = await TodoModel.findById(req.params.todoId);
    if(todoModel) {
      res.status(200).json(todoModel);
    }else {
      res.status(404).send();
    }
    
  }catch(err){
    next(err);
  } 
};