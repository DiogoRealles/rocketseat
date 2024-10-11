require('express-async-errors');
const migrationsRun = require('./database/sqlite/migrations');
const AppError = require('./utils/AppError');
const uploadConfig = require('./configs/upload');
const cors = require('cors');
const express = require('express');
const routes = require('./routes');
const PORT = process.env.PORT || '3338';
const FRONT = '5173';

migrationsRun();

const server = express();
server.use(cors({ credentials: true, origin: `http://localhost:${FRONT}` }));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use('/files', express.static(uploadConfig.UPLOADS_FOLDER));

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
