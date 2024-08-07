import { Injectable } from '@nestjs/common';
import { UsersGateMicroservicesProvider } from '../../../core/microservices/microservices.users-provider';
import { Observable } from 'rxjs';
import { Friendship } from './entities/friendship.entity';
import { CreateFriendshipInput } from './dto/create-friendship.input';
import { ID } from '../../utils/ID';

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

  async findFriends(userId: string): Promise<Observable<Friendship[]>> {
    return this.friendshipProvider.sendWithTimeout<Friendship[], ID>(
      'findFriends',
      { id: userId },
    );
  }

  // async remove(
  //   removeFriendshipInput: RemoveFriendshipInput,
  // ): Promise<Observable<Friendship>> {
  //   return this.friendshipProvider.sendWithTimeout<
  //     Friendship,
  //     RemoveFriendshipInput
  //   >('removeFriendship', removeFriendshipInput);
  // }
}
