import { Inject, Injectable } from '@nestjs/common';
import { MicroservicesProvider } from '@pieceowater-dev/lotof.lib.broadcaster';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AuthMicroservicesProvider extends MicroservicesProvider {
  constructor(
    @Inject('AUTH_MICROSERVICES') protected clientProxy: ClientProxy,
  ) {
    super(clientProxy);
  }
}
