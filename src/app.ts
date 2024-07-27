import { Hono } from 'hono';
import { userRouter } from './routes/user.router';
import { errorHandler } from './middlewares/error.middleware';
import { logger } from './middlewares/logger.middleware';
import './jobs/processors'; 
import rateLimiter from './middlewares/ratelimiter.middleware';
import { secureHeaders } from 'hono/secure-headers'


const app = new Hono();

app.use('*', logger);
app.use('*', rateLimiter)
app.use(secureHeaders())

app.get('/', (c) => c.text('Hono MongoDB API'));

app.route('/api/user/', userRouter);

app.use('*', errorHandler);

export default app;
