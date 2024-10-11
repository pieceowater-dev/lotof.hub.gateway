import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Auth } from './entities/auth.entity';
import { RegistrationInput } from './dto/registration.input';
import { LoginInput } from './dto/login.input';

@Resolver(() => Auth)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Query(() => Auth, { name: 'auth' })
  async login(@Args('loginInput') loginInput: LoginInput) {
    return await this.authService.login(loginInput);
  }

  @Mutation(() => Auth)
  async registrations(
    @Args('registrationInput') registrationInput: RegistrationInput,
  ) {
    return await this.authService.registrations(registrationInput);
  }
}
