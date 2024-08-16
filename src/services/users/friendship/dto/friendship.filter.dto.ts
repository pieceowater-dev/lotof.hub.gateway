import { DefaultFilterInput } from '../../../utils/default.filter/default.filter.input';
import { Field, InputType } from '@nestjs/graphql';
import { InOut } from '../enum/InOut';

@InputType()
export class FriendshipFilterDto extends DefaultFilterInput {
  @Field()
  userId: string;

  @Field(() => InOut)
  inout: InOut;
}
