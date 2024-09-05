import BaseService from './base.service';
import userModel from '../models/user.model';
import { IUser } from '../interfaces/user.interface';
import { sign } from 'hono/jwt'


class UserService extends BaseService<IUser> {
  constructor() {
    super(userModel);
  }

  async authorize(validatedBody: IUser) {
    const payload = {
      sub: 'user123',
      role: 'admin',
      exp: Math.floor(Date.now() / 1000) + 60 * 5, // Token expires in 5 minutes
    }
    const secret = 'mySecretKey'
    const token = await sign(payload, secret)
    return token;
  }
}

export const userService = new UserService();
