import { Field, ObjectType } from '@nestjs/graphql';
import { Friendship } from '../../friendship/entities/friendship.entity';

@ObjectType()
export class User {
  @Field(() => String)
  id: string;

  @Field()
  username: string;

  @Field()
  email: string;

  @Field(() => [Friendship])
  friends?: Friendship[];
}
