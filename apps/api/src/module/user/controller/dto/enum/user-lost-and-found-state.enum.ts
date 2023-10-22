import { registerEnumType } from '@nestjs/graphql';

// eslint-disable-next-line no-shadow
export enum UserLostAndFoundStateEnum {
  NONE = 'NONE',
  DELIVERING = 'DELIVERING',
  RETRIEVING = 'RETRIEVING',
}

registerEnumType(UserLostAndFoundStateEnum, { name: 'UserLostAndFoundState' });
