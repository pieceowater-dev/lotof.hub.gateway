import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsUUID } from 'class-validator';

@InputType()
export class CreateFriendshipInput {
  @Field()
  @IsNotEmpty()
  @IsUUID()
  user: string;

  @Field()
  @IsNotEmpty()
  @IsUUID()
  friend: string;
}
