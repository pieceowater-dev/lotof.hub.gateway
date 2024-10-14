import { Injectable } from '@nestjs/common';
import { RegistrationInput } from './dto/registration.input';
import { LoginInput } from './dto/login.input';
import { UsersMicroservicesProvider } from '../user/users.microservices-provider';
import { User } from '../user/entities/user.entity';
import { AuthJwtProvider } from './auth.jwt.provider';

@Injectable()
export class AuthService {
  constructor(
    private usersMicroservicesProvider: UsersMicroservicesProvider,
    private authJwtProvider: AuthJwtProvider,
  ) {}

  async login(loginInput: LoginInput) {
    return this.usersMicroservicesProvider.sendWithTimeout<User, LoginInput>(
      'userLogin',
      loginInput,
    );
  }

  async registrations(registrationInput: RegistrationInput) {
    this.usersMicroservicesProvider.sendWithTimeout<User, RegistrationInput>(
      'userRegister',
      registrationInput,
    );
  }
}
