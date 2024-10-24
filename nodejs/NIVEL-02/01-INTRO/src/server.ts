// IMPORT
import Fastify from 'fastify';
const PORT = process.env.PORT;

// SERVER
const fastify = Fastify({
  logger: true,
});

// CREATE ROUTES
fastify.get('/', (request, reply) => {
  reply.send({ hello: 'world' });
});

// RUN SERVER
fastify.listen({ PORT }, (err, address) => {
  if (err) throw err;
  // Server is now listening on ${address}
});
