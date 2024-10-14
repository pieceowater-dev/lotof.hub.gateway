import { Injectable } from '@nestjs/common';
import { TokenPayload } from '../../../core/jwt/types/token.payload';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthJwtProvider {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  signAccessKey(tokenPayload: TokenPayload): string {
    return this.jwtService.sign(tokenPayload, {
      expiresIn: '10m',
      secret: this.configService.get<string>('SECRET_ACCESS'),
    });
  }

  verifyAccessKey(accessToken: string): TokenPayload {
    return this.jwtService.verify(accessToken, {
      secret: this.configService.get<string>('SECRET_ACCESS'),
    });
  }

  signRefreshKey(tokenPayload: TokenPayload): string {
    return this.jwtService.sign(tokenPayload, {
      expiresIn: '30d',
      secret: this.configService.get<string>('SECRET_REFRESH'),
    });
  }

  verifyRefreshKey(refreshToken: string): TokenPayload {
    return this.jwtService.verify(refreshToken, {
      secret: this.configService.get<string>('SECRET_REFRESH'),
    });
  }
}
