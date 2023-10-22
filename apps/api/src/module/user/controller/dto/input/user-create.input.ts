import { Field, InputType } from '@nestjs/graphql';
import type { User } from '#api/module/user/domain/user.model';

@InputType()
export class UserCreateInput implements Omit<User, 'id' | 'fingerprintId' | 'lostAndFoundState' | 'createdAt'> {
  @Field(() => String, { nullable: false })
  authId!: string;
}
