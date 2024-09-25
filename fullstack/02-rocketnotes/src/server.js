const express = require('express');
const routes = require('./routes');
const PORT = process.env.PORT;

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use(routes);

server.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});
