import app from './app';
import { connectDB } from './db';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  await connectDB();
  Bun.serve({
    fetch: app.fetch,
    port: Number(PORT),
  });

  console.log(`Server running on http://localhost:${PORT}`);
};

startServer();
