import { Module } from '@nestjs/common';
import { FriendshipResolver } from './friendship.resolver';
import { MicroservicesModule } from '../../../core/microservices/microservices.module';
import { FriendshipService } from './friendship.service';

@Module({
  imports: [MicroservicesModule],
  providers: [FriendshipService, FriendshipResolver],
})
export class FriendshipModule {}
