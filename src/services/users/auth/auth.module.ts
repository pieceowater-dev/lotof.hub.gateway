import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { UsersModule } from '../user/users.module';
import { GlobalJwtModule } from '../../../core/jwt/jwt.module';
import { AuthJwtProvider } from './auth.jwt.provider';

@Module({
  imports: [UsersModule, GlobalJwtModule],
  providers: [AuthResolver, AuthService, AuthJwtProvider],
  exports: [AuthService],
})
export class AuthModule {}
