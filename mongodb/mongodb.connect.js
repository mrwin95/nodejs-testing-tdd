const mongoose = require('mongoose');

async function connect() {
  const dbUrl = 'mongodb://localhost:27017/nodejs-todo';
  try {
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true

    });
    console.log('Mongodb connected');
  } catch (error) {
    console.error(error);
    console.error('Occurred an error' + error.message);
  }
  
}

module.exports = { connect };