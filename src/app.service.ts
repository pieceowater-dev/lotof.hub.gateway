// src/app.service.ts
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Universe!';
  }
}
