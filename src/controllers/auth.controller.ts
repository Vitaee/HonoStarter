import { Context } from 'hono';
import { authService } from '../services/auth.service';
import { sendResponse } from '../utils/baseResponse';


export const authPage = async (c: Context) => {
  try {
    const user = await authService.find();
    const payload = c.get('jwtPayload');
    console.log(payload);

    return sendResponse(c, true, user, null, 201);
  } catch (error: any) {
    return sendResponse(c, false, [], error.message, 500);
  }
};