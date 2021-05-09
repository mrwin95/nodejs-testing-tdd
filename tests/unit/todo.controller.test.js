const TodoController = require('../../controllers/todo.controller');
const TodoModel = require('../../models/todo.model');
const request = require('supertest');
const httpMocks = require('node-mocks-http');
const newTodo = require('../mock-data/new-todo.json');
const allTodos = require('../mock-data/all-todos.json');

TodoModel.create = jest.fn();
TodoModel.find = jest.fn();

let req, res, next;
beforeEach(() => {  
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
  next = jest.fn();
});

describe('TodoController.getTodos', () => {
  // getTodos
  it('should have a getTodos function', () => {
    expect(typeof TodoController.getTodos).toBe('function');
  });

  it('should call TodoModel.find({})', async () => {
    await TodoController.getTodos(req, res, next);
    expect(TodoModel.find).toHaveBeenCalledWith({});
  });

  it('should return response with status 200 and all todos', async () => {
    TodoModel.find.mockReturnValue(allTodos);
    await TodoController.getTodos(req, res, next);
    expect(res.statusCode).toBe(200);
    expect(res._isEndCalled()).toBeTruthy();
    expect(res._getJSONData()).toStrictEqual(allTodos);
  });

  it('should handle error in getTodos', async ()=> {
    const errorMessage = { message: 'Error finding'};

    const rejectPromise = Promise.reject(errorMessage);

    TodoModel.find.mockReturnValue(rejectPromise);
    await TodoController.getTodos(req, res, next);

    expect(next).toHaveBeenCalledWith(errorMessage);
  });

});

describe('TodoController.createTodo', () => {
  
  beforeEach(() => {
    req.body = newTodo;
    TodoController.createTodo(req, res, next);
  });

  it('should have a createTodo function', async () => {
    expect(typeof TodoController.createTodo).toBe('function');
  });

  it('should call TodoModel.create', async () => {        
    expect(TodoModel.create).toBeCalledWith(newTodo);    
  });
  
  it('should return a response code 201', async () => {    
    expect(res.statusCode).toBe(201);    
    expect(res._isEndCalled()).toBeTruthy();
  });

  it('should return json response',  async () => {    
    await TodoModel.create.mockReturnValue(newTodo);
    await TodoController.createTodo(req, res, next);
    expect(res._getJSONData()).toStrictEqual(newTodo);    
  });

  it('should handler error', async () => {
    const errorMessage = {
      message: 'Done property missing'
    };

    const rejectedPromise = Promise.reject(errorMessage);

    TodoModel.create.mockReturnValue(rejectedPromise);

    await TodoController.createTodo(req, res, next);
    expect(next).toBeCalledWith(errorMessage);

  });

});