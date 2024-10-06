// src/health/health.resolver.ts
import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class HealthResolver {
  @Query(() => String)
  async health(): Promise<string> {
    return 'IDK';
    // try {
    //   const responses = await Promise.all([
    //     this.usersProvider
    //       .sendWithTimeout<string, string>('ping', '', 50)
    //       .toPromise(),
    //   ]);
    //
    //   if (responses.every((res) => res === 'PONG')) {
    //     return 'OK';
    //   } else {
    //     return 'Some services are not responding with PONG';
    //   }
    // } catch (error) {
    //   return 'Some services are not reachable';
    // }
  }
}
