import { Injectable } from '@nestjs/common';
import { DBConnection } from 'src/infrastructure/dbconnection';
import { UsersDao } from 'src/dao/users.dao';

@Injectable()
export class UsersService {
  createFullName = (params: {
    firstName?: string;
    lastName?: string;
  }): string => `${params.firstName}${params.lastName}`;

  createUser = async (params: {
    firstName?: string;
    lastName?: string;
  }): Promise<unknown> =>
    (await DBConnection.getManager())
      .transaction(manager =>
        new UsersDao(manager).create(
          this.createFullName({
            firstName: params.firstName,
            lastName: params.lastName,
          }),
        ),
      )
      .finally(() => DBConnection.close());
  getAllUser = async (): Promise<UsersDao.Entity[]> =>
    (await DBConnection.getManager())
      .transaction(manager => new UsersDao(manager).findAll())
      .finally(() => DBConnection.close());
}
