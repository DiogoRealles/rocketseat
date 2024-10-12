require('express-async-errors');

const cors = require('cors');
const express = require('express');
const routes = require('./routes');
const PORT = process.env.PORT || '3338';
const FRONT = '5173';
const cookieParser = require('cookie-parser');
const AppError = require('./utils/AppError');

const server = express();
server.use(express.json());
server.use(cookieParser());
server.use(
  cors({
    origin: [`http://localhost:${FRONT}`, `http://127.0.0.1:${FRONT}`],
    credentials: true,
  })
);

server.use(routes);

server.use((err, request, response, next) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

server.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});
