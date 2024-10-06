import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { UsersModule } from '../users/user/users.module';
import { ClientsModule } from '@nestjs/microservices';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { createRabbitMQOptions } from '../../core/config/rabbitmq.config';
import { AuthMicroservicesProvider } from './auth.microservices.provider';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: 'AUTH_MICROSERVICES',
        imports: [ConfigModule],
        useFactory: (configService: ConfigService) => ({
          ...createRabbitMQOptions('auth_queue', configService),
        }),
        inject: [ConfigService],
      },
    ]),
    UsersModule,
  ],
  providers: [AuthMicroservicesProvider, AuthResolver, AuthService],
})
export class AuthModule {}
