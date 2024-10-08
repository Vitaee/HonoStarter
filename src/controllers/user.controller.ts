import { Context } from 'hono';
import { userService } from '../services/user.service';
import { sendResponse } from '../utils/baseResponse';


export const getAllUsers = async (c: Context) => {
  try {
    const users = await userService.find();
    return sendResponse(c, true, users, null, 200);
  } catch (error: any) {
    return sendResponse(c, false, [], error.message, 500);
  }
};


export const registerUser = async (c: Context) => {
  try {
    const token = await userService.authorize(c.get('validatedBody'));
    return sendResponse(c, true, token, null, 201);
  } catch (error: any) {
    return sendResponse(c, false, [], error.message, 500);
  }
};