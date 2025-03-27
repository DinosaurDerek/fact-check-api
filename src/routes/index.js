export default async function routes(fastify) {
  fastify.get('/', async (request, reply) => {
    return { message: 'Fastify API is running!' }
  })
}
