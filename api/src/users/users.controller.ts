import { Controller, Get } from '@nestjs/common';
import { UsersService } from './services/user.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers(): string[] {
    return this.usersService.getAllUsers();
  }
}
