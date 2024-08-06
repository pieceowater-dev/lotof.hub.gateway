import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { CreateUserInput } from './dto/create-user.input';
import { Observable } from 'rxjs';
import { UpdateUserInput } from './dto/update-user.input';
import { PaginatedUserList } from './entities/paginated.user-list.entity';
import { ListUserFilterInput } from './dto/list-user.filter.input';
import { PaginatedEntity } from '../../utils/paginated.list/paginated.entity';
import { Friendship } from '../friendship/entities/friendship.entity';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  async createUser(
    @Args('createUserInput')
    createUserInput: CreateUserInput,
  ): Promise<Observable<User>> {
    return this.usersService.create(createUserInput);
  }

  @Mutation(() => User)
  async updateUser(
    @Args('updateUserInput')
    updateUserInput: UpdateUserInput,
  ): Promise<Observable<User>> {
    return this.usersService.update(updateUserInput.id, updateUserInput);
  }

  @Query(() => PaginatedUserList, { name: 'users' })
  async findAll(
    @Args('filter')
    listUserFilterInput: ListUserFilterInput,
  ): Promise<Observable<PaginatedEntity<User>>> {
    return this.usersService.findAll(listUserFilterInput);
  }

  @Query(() => User, { name: 'user' })
  async findOne(
    @Args('id', { type: () => String })
    id: string,
  ): Promise<Observable<User>> {
    return await this.usersService.findOne(id);
  }

  @ResolveField(() => [Friendship])
  friendships(@Parent() user: User) {
    return this.userService.findFriendships(user.id);
  }

  @ResolveField(() => [Friendship])
  friends(@Parent() user: User) {
    return this.userService.findFriends(user.id);
  }
}
