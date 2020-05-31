import { DBConnection } from 'src/infrastructure/dbconnection';
import { UsersDao } from './users.dao';

describe('UsersDao', () => {
  let dao: UsersDao;

  beforeEach(async () => {
    dao = new UsersDao(await DBConnection.getManager());
  });

  it('should be defined', () => {
    expect(dao).toBeDefined();
  });

  it('create', async () => {
    const result = await dao.create('JohnDoe');
    expect(result).toStrictEqual([]);
  });
  it('get', async () => {
    const users = await dao.findAll();
    expect(users).toBeDefined();
    if (users.length < 1) return;
    expect(users[0].id).toBeGreaterThan(0);
    expect(users[0].name.length).toBeGreaterThan(0);
  });
  it('getById', async () => {
    const id = '1';
    const device = await dao.findOneById(id);
    if (device) {
      expect(device.id).toBeGreaterThan(0);
      expect(device.name.length).toBeGreaterThan(0);
    }
  });
  afterEach(async () => {
    await DBConnection.close();
  });
});
