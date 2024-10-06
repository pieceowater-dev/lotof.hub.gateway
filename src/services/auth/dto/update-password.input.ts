import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdatePasswordInput {
  @Field()
  userId: string;

  @Field()
  password: string;
}
