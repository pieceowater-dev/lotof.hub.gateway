import { PaginatedList } from '../../../utils/paginated.list/paginated.list';
import { Friendship } from '../entities/friendship.entity';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PaginatedFriendshipListDto extends PaginatedList<Friendship>(
  Friendship,
) {}
