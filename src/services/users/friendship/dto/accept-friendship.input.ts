import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class AcceptFriendshipInput {
  @Field()
  id: number;
}
