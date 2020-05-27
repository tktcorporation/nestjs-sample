import { Controller, Get, Query, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  // GET の場合は QueryStrings からパラメータを取得
  @Get()
  getFullName(
    @Query() createFullNameDto: { first_name?: string; last_name?: string },
  ) {
    return {
      full_name: this.usersService.createFullName({
        firstName: createFullNameDto.first_name,
        lastName: createFullNameDto.last_name,
      }),
    };
  }

  // POST の場合は Body からパラメータを取得
  @Post()
  getFullNameAndMethod(
    @Body() createFullNameDto: { first_name?: string; last_name?: string },
  ) {
    return {
      method: 'post',
      full_name: this.usersService.createFullName({
        firstName: createFullNameDto.first_name,
        lastName: createFullNameDto.last_name,
      }),
    };
  }
}
