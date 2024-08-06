import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';
import { MicroservicesModule } from '../../../core/microservices/microservices.module';

@Module({
  imports: [MicroservicesModule],
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
