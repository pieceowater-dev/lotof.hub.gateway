import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Friendship } from './entities/friendship.entity';
import { FriendshipService } from './friendship.service';
import { Observable } from 'rxjs';
import { CreateFriendshipInput } from './dto/create-friendship.input';

@Resolver(() => Friendship)
export class FriendshipResolver {
  constructor(private readonly friendshipService: FriendshipService) {}

  @Mutation(() => Friendship)
  async createFriendship(
    @Args('createFriendshipInput')
    createFriendshipInput: CreateFriendshipInput,
  ): Promise<Observable<Friendship>> {
    return this.friendshipService.create(createFriendshipInput);
  }

  // @Mutation(() => Friendship)
  // async removeFriendship(
  //   @Args('removeFriendshipInput')
  //   removeFriendshipInput: RemoveFriendshipInput,
  // ): Promise<Observable<Friendship>> {
  //   return this.friendshipService.remove(removeFriendshipInput);
  // }
}
