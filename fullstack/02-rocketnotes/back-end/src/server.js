require('express-async-errors');
const migrationsRun = require('./database/sqlite/migrations');
const AppError = require('./utils/AppError');
const express = require('express');
const routes = require('./routes');
const PORT = process.env.PORT;

migrationsRun();

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use(routes);

server.use((error, req, res, next) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }

  console.log(error);

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

server.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});