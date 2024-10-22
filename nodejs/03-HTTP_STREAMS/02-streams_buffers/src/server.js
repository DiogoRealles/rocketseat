import http from 'node:http';
const PORT = process.env.PORT;

const server = http.createServer(async (req, res) => {
  const buffers = [];

  for await (const chunk of req) {
    buffers.push(chunk);
  }

  const fullStreamContent = Buffer.concat(buffers).toString();

  console.log(fullStreamContent);

  return res.end(fullStreamContent);
});

server.listen(PORT, () =>
  console.log(`Server running at: http://localhost:${PORT}`)
);
