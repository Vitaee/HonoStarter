import { Context, Next } from 'hono';

export const errorHandler = async (c: Context, next: Next) => {
  try {
    await next();
  } catch (err) {
    console.error(err);
    c.status(500);
    c.json({ error: 'Internal Server Error' });
  }
};
