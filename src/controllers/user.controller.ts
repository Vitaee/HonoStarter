import { Context } from 'hono';
import { userService } from '../services/user.service';


export const getAllUsers = async (c: Context) => {
    try {
      const users = await userService.find();
      return c.json(users);
    } catch (error: any) {
      return c.json({ error: error.message }, 500);
    }
  
};

export const createUser = async (c: Context) => { 
    try {
      const user = await userService.create(c.get('validatedBody'));
      return c.json(user, 201);
    } catch (error: any) {
      return c.json({ error: error.message }, 500);
    }
  
}