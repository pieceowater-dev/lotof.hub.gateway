import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';
import { FriendshipService } from '../friendship/friendship.service';
import { ClientsModule } from '@nestjs/microservices';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { createRabbitMQOptions } from '../../../core/config/rabbitmq.config';
import { UsersMicroservicesProvider } from './users.microservices-provider';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: 'USERS_MICROSERVICES',
        imports: [ConfigModule],
        useFactory: (configService: ConfigService) => ({
          ...createRabbitMQOptions('users_queue', configService),
        }),
        inject: [ConfigService],
      },
    ]),
  ],
  providers: [
    UsersMicroservicesProvider,
    UsersResolver,
    UsersService,
    FriendshipService,
  ],
  exports: [UsersService, UsersMicroservicesProvider],
})
export class UsersModule {}
