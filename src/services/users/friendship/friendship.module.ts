import { Module } from '@nestjs/common';
import { FriendshipResolver } from './friendship.resolver';
import { FriendshipService } from './friendship.service';
import { UsersModule } from '../user/users.module';

@Module({
  imports: [UsersModule],
  providers: [FriendshipService, FriendshipResolver],
})
export class FriendshipModule {}
