import { rateLimiter } from 'hono-rate-limiter';


const limiter = rateLimiter({
  windowMs: 10 * 60 * 1000, 
  limit: 100,              
  standardHeaders: "draft-6", 
  keyGenerator: (c) =>  c.req.header('x-real-ip')?.toString() || '' ,
  //store: new RedisStore({ client: redisClient }), // Use Redis for storing rate limit data
});

export default limiter;
