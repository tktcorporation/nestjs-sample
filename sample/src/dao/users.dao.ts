import { EntityManager } from 'typeorm';
import { InternalServerErrorException } from '@nestjs/common';

export class UsersDao {
  constructor(private readonly manager: EntityManager) {}
  create = (name: string): Promise<unknown> =>
    this.manager.query(`INSERT INTO "users" ("name") VALUES ($1);`, [name]);
  findAll = async (): Promise<UsersDao.Entity[]> => {
    const users: unknown[] = await this.manager.query(`
            SELECT
                id,
                name
            FROM
                "users" AS users;
        `);
    return users.map(user => UsersDao.buildEntity(user));
  };
  findOneById = async (id: string): Promise<UsersDao.Entity | undefined> => {
    const user: unknown[] = await this.manager.query(
      `
            SELECT
                users. id,
                users. name
            FROM
                "users"
            WHERE
                users. "id" = $1;
        `,
      [id],
    );
    if (user.length < 1) return undefined;
    return UsersDao.buildEntity(user[0]);
  };

  private static buildEntity(object: unknown): UsersDao.Entity {
    if (!UsersDao.isEntity(object))
      throw new InternalServerErrorException(
        object,
        'fetched data type is invalid',
      );
    return {
      id: object.id,
      name: object.name,
    };
  }
}
export namespace UsersDao {
  export interface Entity {
    id: number;
    name: string;
  }
  export const isEntity = (value: unknown): value is Entity => {
    return (
      typeof value === 'object' &&
      typeof (value as Entity).id === 'number' &&
      typeof (value as Entity).name === 'string'
    );
  };
}
