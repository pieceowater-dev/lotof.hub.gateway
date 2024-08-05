import { CreateUserInput } from './dto/create-user.input';
import { Observable } from 'rxjs';
import { User } from './entities/user.entity';
import { ListUserFilterInput } from './dto/list-user.filter.input';
import { PaginatedEntity } from '../utils/paginated.list/paginated.entity';
import { UpdateUserInput } from './dto/update-user.input';
import { UsersGateMicroservicesProvider } from '../../core/microservices/microservices.users-provider';
import { Injectable } from '@nestjs/common';
import { ID } from '../utils/ID';

@Injectable()
export class UsersService {
  constructor(private usersProvider: UsersGateMicroservicesProvider) {}

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
    return this.usersProvider.sendWithTimeout<User, ID>('findOneUser', { id });
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
