import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersModule } from './users.module';
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

  it('getFullName', () => {
    const first = 'John';
    const last = 'Doe';
    const result = controller.getFullName({
      first_name: first,
      last_name: last,
    });
    expect(result.full_name).toBe(`${first}${last}`);
  });
  it('getFullName', () => {
    const first = 'John';
    const last = 'Doe';
    const result = controller.getFullNameAndMethod({
      first_name: first,
      last_name: last,
    });
    expect(result.full_name).toBe(`${first}${last}`);
    expect(result.method).toBe('post');
  });
});
