import { Context } from 'hono';

export const sendResponse = (
  c: Context,
  success: boolean,
  data: any = [],
  errorMsg: string | null = null,
  statusCode: number = 200
) => {
  return c.json({
    success,
    data,
    errorMsg
  }, {
    status: statusCode
  });
};
