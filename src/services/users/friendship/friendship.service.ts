import { Injectable } from '@nestjs/common';
import { UsersGateMicroservicesProvider } from '../../../core/microservices/microservices.users-provider';
import { Observable } from 'rxjs';
import { Friendship } from './entities/friendship.entity';
import { CreateFriendshipInput } from './dto/create-friendship.input';
import { AcceptFriendshipInput } from './dto/accept-friendship.input';
import { RemoveFriendshipInput } from './dto/remove-friendship.input';
import { FriendshipFilterDto } from './dto/friendship.filter.dto';
import { PaginatedEntity } from '@pieceowater-dev/lotof.lib.broadcaster';

@Injectable()
export class FriendshipService {
  constructor(private friendshipProvider: UsersGateMicroservicesProvider) {}

  async create(
    createFriendshipInput: CreateFriendshipInput,
  ): Promise<Observable<Friendship>> {
    return this.friendshipProvider.sendWithTimeout<
      Friendship,
      CreateFriendshipInput
    >('createFriendship', createFriendshipInput);
  }

  async accept(
    acceptFriendshipInput: AcceptFriendshipInput,
  ): Promise<Observable<Friendship>> {
    return this.friendshipProvider.sendWithTimeout<
      Friendship,
      AcceptFriendshipInput
    >('acceptRequest', acceptFriendshipInput);
  }

  async remove(
    removeFriendshipInput: RemoveFriendshipInput,
  ): Promise<Observable<Friendship>> {
    return this.friendshipProvider.sendWithTimeout<
      Friendship,
      RemoveFriendshipInput
    >('removeRequest', removeFriendshipInput);
  }

  async friendshipRequestList(
    friendshipFilterDto: FriendshipFilterDto,
  ): Promise<Observable<PaginatedEntity<Friendship>>> {
    return this.friendshipProvider.sendWithTimeout<
      PaginatedEntity<Friendship>,
      FriendshipFilterDto
    >('getFriendshipRequestList', friendshipFilterDto);
  }
}
