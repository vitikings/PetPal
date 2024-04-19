import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      username: 'john',
      password: 'changeme',
      roles: [],
    },
    {
      id: 2,
      username: 'maria',
      password: 'guess',
      roles: [],
    },
  ];

  getAllUsers(): string[] {
    return ['user1', 'user2'];
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
