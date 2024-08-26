import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class RemoveFriendshipInput {
  @Field()
  id: number;
}
