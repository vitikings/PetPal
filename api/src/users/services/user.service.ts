import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService {
  getAllUsers(): string[] {
    return ['user1', 'user2'];
  }
}