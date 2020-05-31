import { Controller, Get, Query, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async createUser(
    @Body() createFullNameDto: { first_name?: string; last_name?: string },
  ) {
    await this.usersService.createUser({
      firstName: createFullNameDto.first_name,
      lastName: createFullNameDto.last_name,
    });
    return {
      method: 'post',
      message: 'created',
    };
  }

  @Get()
  async getAllUsers() {
    return {
      users: await this.usersService.getAllUser(),
    };
  }
}
