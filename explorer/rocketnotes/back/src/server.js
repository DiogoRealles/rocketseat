require("express-async-errors");
require("dotenv/config");
const migrationsRun = require("./database/sqlite/migrations");
const uploadConfig = require("./configs/upload");
const AppError = require("./utils/AppError");
const cors = require("cors");
const express = require("express");

const server = express();
const port = process.env.PORT || 3333;
server.use(cors());
server.use(express.json());

server.use("/files", express.static(uploadConfig.UPLOADS_FOLDER));
const routes = require("./routes");
migrationsRun();

server.use(routes);

server.use((error, req, res, next) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: "error!",
      message: error.message,
    });
  }

  console.error(error);

  return res.status(500).json({
    status: "error",
    message: "Internal server error!",
  });
});

server.listen(port, () => {
  console.log(`Express running in port: ${port}`);
});
