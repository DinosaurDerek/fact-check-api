import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { Type } from '@sinclair/typebox'

import { authenticate } from '../middlewares/authMiddleware.js'

export default async function searchRoutes(fastify: FastifyInstance) {
  const SearchSchema = {
    response: {
      200: Type.Object({
        message: Type.String(),
      }),
    },
  }

  fastify.get(
    '/search',
    { preHandler: authenticate, schema: SearchSchema },
    async (_request: FastifyRequest, _reply: FastifyReply) => {
      return { message: 'Fastify API is running!' }
    }
  )
}
