import { Hono } from 'hono';
import { userRouter } from './routes/user.router';
import { errorHandler } from './middlewares/error.middleware';
import { logger } from './middlewares/logger.middleware';
import './jobs/processors'; 
import rateLimiter from './middlewares/ratelimiter.middleware';
import { secureHeaders } from 'hono/secure-headers'
import { jwt, JwtVariables } from 'hono/jwt'
import { authRouter } from './routes/auth.router';

type Variables = JwtVariables

const app = new Hono<{ Variables: Variables }>()

app.use('*', logger);
app.use('*', rateLimiter)
app.use(secureHeaders())

app.get('/', (c) => c.text('Hono MongoDB API'));

app.use('*/auth/*', (c, next) => {
    const jwtMiddleware = jwt({
      secret: "mySecretKey",
    })
    return jwtMiddleware(c, next)
  })

app.route('/api/user/', userRouter);
app.route('/api/auth/', authRouter);

app.use('*', errorHandler);

export default app;
