import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Friendship } from './entities/friendship.entity';
import { FriendshipService } from './friendship.service';
import { Observable } from 'rxjs';
import { CreateFriendshipInput } from './dto/create-friendship.input';
import { FriendshipFilterDto } from './dto/friendship.filter.dto';
import { AcceptFriendshipInput } from './dto/accept-friendship.input';
import { RemoveFriendshipInput } from './dto/remove-friendship.input';
import { PaginatedFriendshipListDto } from './dto/paginated.friendship.list.dto';

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

  @Mutation(() => Friendship)
  async acceptFriendshipRequest(
    @Args('acceptFriendshipInput')
    acceptFriendshipInput: AcceptFriendshipInput,
  ): Promise<Observable<Friendship>> {
    return this.friendshipService.accept(acceptFriendshipInput);
  }

  @Mutation(() => Friendship)
  async removeFriendshipRequest(
    @Args('removeFriendshipInput')
    removeFriendshipInput: RemoveFriendshipInput,
  ): Promise<Observable<Friendship>> {
    return this.friendshipService.remove(removeFriendshipInput);
  }

  @Query(() => PaginatedFriendshipListDto)
  async friendshipRequestList(
    @Args('friendshipFilterDto')
    friendshipFilterDto: FriendshipFilterDto,
  ): Promise<Observable<PaginatedFriendshipListDto>> {
    return await this.friendshipService.friendshipRequestList(
      friendshipFilterDto,
    );
  }
}
