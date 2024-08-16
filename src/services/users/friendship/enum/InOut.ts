import { registerEnumType } from '@nestjs/graphql';

export enum InOut {
  IN,
  OUT,
}

registerEnumType(InOut, { name: 'InOut' });
