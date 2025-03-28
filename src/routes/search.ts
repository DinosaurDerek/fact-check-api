import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { Type } from '@sinclair/typebox'

export default async function searchRoutes(fastify: FastifyInstance) {
  const SearchSchema = {
    response: {
      200: Type.Object({
        message: Type.String(),
      }),
    },
  }

  fastify.get(
    '/',
    { schema: SearchSchema },
    async (_request: FastifyRequest, _reply: FastifyReply) => {
      return { message: 'Fastify API is running!' }
    }
  )
}
