import { Connection } from 'typeorm';
import { DBConnection } from 'src/infrastructure/dbconnection';

describe('DBConnection', () => {
  let connection: Connection;

  beforeEach(async () => {
    connection = await DBConnection.get();
  });
  it('should be defined', () => {
    expect(connection).toBeDefined();
  });
  it('isConnected', () => {
    expect(connection.name).toBe('default');
    expect(connection.isConnected).toBeTruthy();
  });
  it('isConnected2', () => {
    expect(connection.name).toBe('default');
    expect(connection.isConnected).toBeTruthy();
  });
  afterEach(async () => {
    await DBConnection.close();
  });
});
