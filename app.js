const express = require('express');
const app = express();
const todoRoutes = require('./routes/todo.routes');
const mongodb = require('./mongodb/mongodb.connect');

app.use(express.json());

mongodb.connect();

app.use('/todos', todoRoutes);
app.use((err, req, res, next) => {
  res.status(500).json({message: err.message});
});
// app.get('/', (req, res) => {
//   res.send('test');
// });

module.exports = app;