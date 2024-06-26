import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserProviders } from './users.providers';

@Module({
  controllers: [UsersController],
  providers: [UsersService, ...UserProviders],
  exports: [UsersService],
})
export class UsersModule {}
