const express = require('express');
const app = express();
const todoRoutes = require('./routes/todo.routes');

app.use(express.json());

app.use('/todos', todoRoutes);

// app.get('/', (req, res) => {
//   res.send('test');
// });

// app.listen(3000, () => {
//   console.log('Server is running at 3000');
// });

module.exports = app;