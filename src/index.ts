import app from './app';
import { connectDB } from './db';
import { config } from './utils/envConfig';


const startServer = async () => {

  await connectDB();

  Bun.serve({
    fetch: app.fetch,
    port: config.SERVER_PORT,
  });

  console.log(`Server running on http://localhost:${config.SERVER_PORT}`);
};

startServer();
