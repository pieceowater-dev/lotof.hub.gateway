import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Auth } from './entities/auth.entity';
import { UpdatePasswordInput } from './dto/update-password.input';
import { VerifyPasswordInput } from './dto/verify-password.input';

@Resolver(() => Auth)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => Auth)
  updatePassword(
    @Args('updatePasswordInput') updatePasswordInput: UpdatePasswordInput,
  ) {
    return this.authService.updatePassword(updatePasswordInput);
  }

  @Query(() => Auth, { name: 'auth' })
  verifyPassword(
    @Args('updatePasswordInput') verifyPasswordInput: VerifyPasswordInput,
  ) {
    return this.authService.verifyPassword(verifyPasswordInput);
  }
}
