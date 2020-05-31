import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('createFullName', () => {
    const firstName = 'John';
    const lastName = 'Doe';
    expect(service.createFullName({ firstName, lastName })).toBe('JohnDoe');
  });

  it('createUser', async () => {
    const firstName = 'John';
    const lastName = 'Doe';
    const result = await service.createUser({ firstName, lastName });
    expect(result).toBeDefined();
  });
  it('getAllUser', async () => {
    const firstName = 'John';
    const lastName = 'Doe';
    const users = await service.getAllUser();
    expect(users).toBeDefined();
    expect(users[0].id).toBeGreaterThan(0);
    expect(users[0].name.length).toBeGreaterThan(0);
  });
});
