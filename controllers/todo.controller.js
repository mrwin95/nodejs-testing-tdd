const TodoModel = require('../models/todo.model');

exports.createTodo =  async (req, res, next) => {
  try {
    const createModel = await TodoModel.create(req.body);
    res.status(201).json(createModel);
  }catch(err){
    next(err);
  }
}