import http from 'node:http';
const PORT = process.env.PORT;

const users = [];

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === 'GET' && url === '/users') {
    return res
      .setHeader('Content-Type', 'application/json')
      .end(JSON.stringify(users));
  }

  if (method === 'POST' && url === '/users') {
    users.push({
      id: 1,
      name: 'John Doe',
      email: 'johndow@example.com',
    });

    return res.writeHead(201).end();
  }

  return res.writeHead(404).end();
});

server.listen(PORT, () =>
  console.log(`Server running at: http://localhost:${PORT}`)
);