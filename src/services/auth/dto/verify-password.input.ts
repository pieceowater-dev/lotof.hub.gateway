import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class VerifyPasswordInput {
  @Field()
  email: string;

  @Field()
  password: string;
}
