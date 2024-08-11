import { CreateUserInput } from './dto/create-user.input';
import { Observable } from 'rxjs';
import { User } from './entities/user.entity';
import { ListUserFilterInput } from './dto/list-user.filter.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UsersGateMicroservicesProvider } from '../../core/microservices/microservices.users-provider';
import { Injectable } from '@nestjs/common';
import { UserUuid } from '../utils/user/user-uuid';
import { PaginatedEntity } from '@pieceowater-dev/lotof.lib.broadcaster/utils/pagination/entity.pagination';

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
    return this.usersProvider.sendWithTimeout<User, UserUuid>('findOneUser', {
      id,
    });
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
