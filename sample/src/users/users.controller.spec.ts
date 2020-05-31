import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('Users Controller', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
      controllers: [UsersController],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('create user', async () => {
    const first = 'John';
    const last = 'Doe';
    const result = await controller.createUser({
      first_name: first,
      last_name: last,
    });
    expect(result.message).toBe(`created`);
  });

  it('get all users', async () => {
    const result = await controller.getAllUsers();
    expect(result.users.length).toBeGreaterThan(0);
    expect(result.users[0].id).toBeGreaterThan(0);
    expect(result.users[0].name.length).toBeGreaterThan(0);
  });
});
