import { Hono } from 'hono';
import { authPage } from '../controllers/auth.controller';

const authRouter = new Hono();

authRouter.get('/', authPage);

export { authRouter };