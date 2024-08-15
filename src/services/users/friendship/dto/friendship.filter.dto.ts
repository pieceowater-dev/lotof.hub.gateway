import { DefaultFilterInput } from '../../../utils/default.filter/default.filter.input';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class FriendshipFilterDto extends DefaultFilterInput {
  @Field()
  userId: string;
}
