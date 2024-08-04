import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { CreateUserInput } from './dto/create-user.input';
import { Observable } from 'rxjs';
import { UpdateUserInput } from './dto/update-user.input';
import { PaginatedUserList } from './entities/paginated.user-list.entity';
import { ListUserFilterInput } from './dto/list-user.filter.input';
import { PaginatedEntity } from '../utils/paginated.list/paginated.entity';

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
}
