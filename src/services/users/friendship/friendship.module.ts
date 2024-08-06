import { Module } from '@nestjs/common';
// import { FriendshipService } from './friendship.service';
import { FriendshipResolver } from './friendship.resolver';
import { MicroservicesModule } from '../../../core/microservices/microservices.module';

@Module({
  imports: [MicroservicesModule],
  providers: [
    // FriendshipService,
    FriendshipResolver,
  ],
})
export class FriendshipModule {}
