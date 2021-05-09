const TodoController = require('../../controllers/todo.controller');
const TodoModel = require('../../models/todo.model');

TodoModel.create = jest.fn();
describe('TodoController.createTodo', () => {
  it('should have a createTodo function', () => {
    expect(typeof TodoController.createTodo).toBe('function');
  });

  it('should have a function TodoModel.create', () => {
    TodoController.createTodo();
    expect(TodoModel.create).toBeCalled();
  });
  
});