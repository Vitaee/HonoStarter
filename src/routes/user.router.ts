import { Hono } from 'hono';
import { createUser, getAllUsers } from '../controllers/user.controller';
import { validationMiddleware } from '../validations/body.validation';
import { CreateUserDto } from '../dto/user.dto';

const userRouter = new Hono();

userRouter.get('/', getAllUsers);
userRouter.post('/', validationMiddleware(CreateUserDto), createUser);

export { userRouter };