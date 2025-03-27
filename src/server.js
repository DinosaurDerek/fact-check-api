import "dotenv/config";
import Fastify from "fastify";

import envSetup from "./plugins/env.js";
import corsSetup from "./plugins/cors.js";
import routes from "./routes/index.js";
import healthRoutes from "./routes/health.js";

const fastify = Fastify({ logger: true });

// Register plugins
fastify.register(envSetup);
fastify.register(corsSetup);

// Register routes
fastify.register(routes);
fastify.register(healthRoutes);

const start = async () => {
  try {
    await fastify.listen({ port: process.env.PORT || 5000, host: "0.0.0.0" });
    console.log(`🚀 Server listening on http://localhost:${process.env.PORT}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
