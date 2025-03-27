import fastifyCors from '@fastify/cors'

export default async function corsSetup(fastify) {
  fastify.register(fastifyCors, { origin: '*' })
}
