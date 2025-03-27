import fastifyEnv from "@fastify/env";

const schema = {
  type: "object",
  required: ["PORT"],
  properties: {
    PORT: { type: "number", default: 5000 },
    API_KEY: { type: "string" },
  },
};

export default async function envSetup(fastify) {
  fastify.register(fastifyEnv, { schema, dotenv: true });
}
