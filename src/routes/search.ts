import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { Type } from '@sinclair/typebox';

import { fetchFacts } from '../api/index.js';
import { authenticate } from '../middlewares/authMiddleware.js';
import { FactCheckSchema } from '../types/FactCheck.js';

export default async function searchRoutes(fastify: FastifyInstance) {
  const SearchSchema = {
    response: {
      200: Type.Object({
        results: Type.Array(FactCheckSchema),
      }),
    },
  };

  fastify.get(
    '/search',
    { preHandler: authenticate, schema: SearchSchema },
    async (request: FastifyRequest, reply: FastifyReply) => {
      const { query } = request.query as { query?: string };

      if (!query) {
        return reply.status(400).send({ error: 'Query parameter is required' });
      }

      const results = await fetchFacts(query);

      return reply.send({ results });
    }
  );
}
