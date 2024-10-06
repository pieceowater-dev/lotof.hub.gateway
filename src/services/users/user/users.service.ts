import { CreateUserInput } from './dto/create-user.input';
import { Observable } from 'rxjs';
import { User } from './entities/user.entity';
import { ListUserFilterInput } from './dto/list-user.filter.input';
import { UpdateUserInput } from './dto/update-user.input';
import { Injectable } from '@nestjs/common';
import { UserUuid } from '../../utils/user/user-uuid';
import { ID } from '../../utils/ID';
import { PaginatedEntity } from '@pieceowater-dev/lotof.lib.broadcaster';
import { UserEmail } from './types/user-email';
import { UsersMicroservicesProvider } from './users.microservices-provider';

@Injectable()
export class UsersService {
  constructor(private usersProvider: UsersMicroservicesProvider) {}

  async create(createUserInput: CreateUserInput): Promise<Observable<User>> {
    return this.usersProvider.sendWithTimeout<User, CreateUserInput>(
      'createUser',
      createUserInput,
    );
  }

  async findAll(
    listUserFilterInput: ListUserFilterInput,
  ): Promise<Observable<PaginatedEntity<User>>> {
    return this.usersProvider.sendWithTimeout<
      PaginatedEntity<User>,
      ListUserFilterInput
    >('findAllUser', listUserFilterInput);
  }

  async findOne(id: string): Promise<Observable<User>> {
    return this.usersProvider.sendWithTimeout<User, UserUuid>('findOneUser', {
      id,
    });
  }

  async findOneByEmail(email: string): Promise<Observable<User>> {
    return this.usersProvider.sendWithTimeout<User, UserEmail>(
      'findOneUserByEmail',
      {
        email,
      },
    );
  }

  async findOneWithFriends(id: string): Promise<Observable<User>> {
    return this.usersProvider.sendWithTimeout<User, ID>(
      'findOneUserWithFriends',
      { id },
    );
  }

  async update(
    id: string,
    updateUserInput: UpdateUserInput,
  ): Promise<Observable<User>> {
    return this.usersProvider.sendWithTimeout<User, UpdateUserInput>(
      'updateUser',
      {
        id: id,
        ...updateUserInput,
      },
    );
  }
}
