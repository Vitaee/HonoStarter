import BaseService from './base.service';
import userModel from '../models/user.model';
import { IUser } from '../interfaces/user.interface';


class UserService extends BaseService<IUser> {
  constructor() {
    super(userModel);
  }
}

export const userService = new UserService();
