const express = require('express');
const app = express();
const todoRoutes = require('./routes/todo.routes');
const mongodb = require('./mongodb/mongodb.connect');

app.use(express.json());

mongodb.connect();

app.use('/todos', todoRoutes);

// app.get('/', (req, res) => {
//   res.send('test');
// });

// app.listen(3000, () => {
//   console.log('Server is running at 3000');
// });

module.exports = app;