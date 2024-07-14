import { validate, ValidationError } from 'class-validator';
import { plainToInstance } from 'class-transformer';
import { validator } from 'hono/validator';

export const validationMiddleware = (dtoClass: any) => {
  return validator('json', async (value, c) => {
    const body = value;
    const input = plainToInstance(dtoClass, body);
    const errors = await validate(input);

    if (errors.length > 0) {
      c.status(400);
      c.json({ errors: formatErrors(errors) });
      return; 
    }

    c.set('validatedBody', input);
    return body;
  });
};

const formatErrors = (errors: ValidationError[]) => {
  return errors.map(err => {
    return {
      property: err.property,
      constraints: err.constraints
    };
  });
};
