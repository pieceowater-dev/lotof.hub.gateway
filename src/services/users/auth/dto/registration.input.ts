import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class RegistrationInput {
  @Field()
  email: string;

  @Field()
  username: string;

  @Field()
  password: string;
}
