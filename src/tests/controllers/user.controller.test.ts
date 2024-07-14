import { Hono } from 'hono';
import { testClient } from 'hono/testing';
import { getAllUsers } from '../../controllers/user.controller';
import { userService } from '../../services/user.service';
import { mockUsers } from '../mocks/user.mock';

jest.mock('../../services/user.service');

describe('User Controller', () => {
  let app: Hono;

  beforeEach(() => {
    app = new Hono();

    (userService.find as jest.Mock).mockResolvedValue(mockUsers);

    app.get('/user', getAllUsers);
  });

  it('should get all users', async () => {
    const app = new Hono().get('/user', (c) => c.json(mockUsers))
    const res = await testClient(app)["user"].$get();
    
    expect(res.status).toBe(200);
    const users = await res.json();
    expect(users).toEqual(mockUsers);
  });
});

