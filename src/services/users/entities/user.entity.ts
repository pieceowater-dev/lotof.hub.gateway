import { Field, ObjectType } from '@nestjs/graphql';
import { IsEmail, IsUUID } from 'class-validator';

@ObjectType()
export class User {
  @Field(() => String)
  @IsUUID()
  id: string;

  @Field()
  username: string;

  @Field()
  @IsEmail()
  email: string;

  @Field({ nullable: true })
  password: string;
}
