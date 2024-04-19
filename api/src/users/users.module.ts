import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UsersService } from "./services/user.service";

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}