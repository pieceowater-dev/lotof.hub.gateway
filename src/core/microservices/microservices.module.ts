// src/microservices/microservices.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsModule } from '@nestjs/microservices';
import { createRabbitMQOptions } from '../config/rabbitmq.config';
import { UsersGateMicroservicesProvider } from './microservices.users-provider';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: 'USERS_SERVICE',
        imports: [ConfigModule],
        useFactory: (configService: ConfigService) => ({
          ...createRabbitMQOptions('users_queue', configService),
        }),
        inject: [ConfigService],
      },
    ]),
  ],
  providers: [UsersGateMicroservicesProvider],
  exports: [ClientsModule, UsersGateMicroservicesProvider],
})
export class MicroservicesModule {}
