import { Field, Int, ObjectType } from '@nestjs/graphql';
import { User } from '../../user/entities/user.entity';

@ObjectType()
export class Friendship {
  @Field(() => Int)
  id: number;

  @Field(() => User)
  friend: User;

  @Field(() => User)
  user: User;
}
