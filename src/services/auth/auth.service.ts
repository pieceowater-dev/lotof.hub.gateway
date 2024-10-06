import { Injectable } from '@nestjs/common';
import { UpdatePasswordInput } from './dto/update-password.input';
import { VerifyPasswordInput } from './dto/verify-password.input';
import { UsersService } from '../users/user/users.service';
import { firstValueFrom } from 'rxjs';
import { AuthMicroservicesProvider } from './auth.microservices.provider';

@Injectable()
export class AuthService {
  constructor(
    private gateMicroservicesProvider: AuthMicroservicesProvider,
    private readonly usersService: UsersService,
  ) {}

  updatePassword(updatePasswordInput: UpdatePasswordInput) {
    return 'This action adds a new auth';
  }

  async verifyPassword(verifyPasswordInput: VerifyPasswordInput) {
    const user = await firstValueFrom(
      await this.usersService.findOneByEmail(verifyPasswordInput.email),
    );

    const verified = await this.gateMicroservicesProvider.sendWithTimeout(
      'verifyPassword',
      {
        userId: user.id,
        password: verifyPasswordInput.password,
      },
    );

    return 'This action adds a new auth';
  }
}
