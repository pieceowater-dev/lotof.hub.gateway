import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { MicroservicesProvider } from '@pieceowater-dev/lotof.lib.broadcaster';

@Injectable()
export class UsersMicroservicesProvider extends MicroservicesProvider {
  constructor(
    @Inject('USERS_MICROSERVICES') protected clientProxy: ClientProxy,
  ) {
    super(clientProxy);
  }
}
