import { Hono } from 'hono'
import { jwt } from 'hono/jwt'
import type { JwtVariables } from 'hono/jwt'

import BaseService from './base.service';
import userModel from '../models/user.model';
import { IUser } from '../interfaces/user.interface';


class AuthService extends BaseService<IUser> {
  constructor() {
    super(userModel);
  }
}

export const authService = new AuthService();
