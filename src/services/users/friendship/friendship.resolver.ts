import { Query, Resolver } from '@nestjs/graphql';
import { Friendship } from './entities/friendship.entity';

@Resolver(() => Friendship)
export class FriendshipResolver {
  constructor(private readonly friendshipService: FriendshipService) {}

  @Query(() => [Friendship])
  friendships() {
    return this.friendshipService.findAll();
  }
}
