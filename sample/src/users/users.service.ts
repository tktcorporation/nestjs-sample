import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  createFullName = (params: { firstName?: string; lastName?: string }) =>
    `${params.firstName}${params.lastName}`;
}
