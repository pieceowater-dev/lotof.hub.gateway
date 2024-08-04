import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { MicroservicesProvider } from '@pieceowater-dev/lotof.lib.broadcaster';

@Injectable()
export class UsersGateMicroservicesProvider extends MicroservicesProvider {
  constructor(@Inject('USERS_SERVICE') protected usersClient: ClientProxy) {
    super(usersClient);
  }
}
