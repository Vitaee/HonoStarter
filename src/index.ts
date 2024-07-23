import app from './app';
import { connectDB } from './db';
import { config } from './utils/envConfig';


const startServer = async () => {

  await connectDB();

  Bun.serve({
    fetch: app.fetch,
    port: Number(config.PORT || 3000),
  });

  console.log(`Server running on http://localhost:${config.PORT || 3000}`);
};

startServer();
