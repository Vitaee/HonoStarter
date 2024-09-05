import { Hono } from 'hono';
import { registerUser, getAllUsers } from '../controllers/user.controller';
import { validationMiddleware } from '../validations/body.validation';
import { CreateUserValidation } from '../validations/users/create.validation';

const userRouter = new Hono();

userRouter.get('/', getAllUsers);
userRouter.post('/', validationMiddleware(CreateUserValidation), registerUser);

export { userRouter };