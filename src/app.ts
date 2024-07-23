import { Hono } from 'hono';
import { userRouter } from './routes/user.router';
import { errorHandler } from './middlewares/error.middleware';
import { logger } from './middlewares/logger.middleware';
//import './jobs/processors'; 


const app = new Hono();

app.use('*', logger);

app.route('user', userRouter);

app.get('/', (c) => c.text('Hono MongoDB API'));

app.use('*', errorHandler);

export default app;
