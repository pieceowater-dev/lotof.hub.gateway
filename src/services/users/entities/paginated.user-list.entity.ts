import { ObjectType } from '@nestjs/graphql';
import { User } from './user.entity';
import { PaginatedList } from '../../utils/paginated.list/paginated.list';

@ObjectType()
export class PaginatedUserList extends PaginatedList(User) {}
