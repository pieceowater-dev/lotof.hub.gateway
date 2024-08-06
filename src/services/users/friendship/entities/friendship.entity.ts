import { Field, Int, ObjectType } from '@nestjs/graphql';
import { User } from '../../user/entities/user.entity';

@ObjectType()
export class Friendship {
  @Field(() => Int)
  id: number;

  @Field(() => User)
  user: User;

  @Field(() => User)
  friend: User;
}
