import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';
import { MicroservicesModule } from '../../../core/microservices/microservices.module';
import { FriendshipService } from '../friendship/friendship.service';

@Module({
  imports: [MicroservicesModule],
  providers: [UsersResolver, UsersService, FriendshipService],
})
export class UsersModule {}
