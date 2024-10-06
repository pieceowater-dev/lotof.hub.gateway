// src/app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { HealthModule } from './core/health/health.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './services/users/user/users.module';
import { FriendshipModule } from './services/users/friendship/friendship.module';
import { AuthModule } from './services/auth/auth.module';

// noinspection TypeScriptValidateTypes
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'schema.gql'),
      sortSchema: true,
      playground: false,
      introspection: true,
      plugins: [
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        require('apollo-server-core').ApolloServerPluginLandingPageLocalDefault(
          { embed: true },
        ),
      ],
    }),
    HealthModule,
    UsersModule,
    FriendshipModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
