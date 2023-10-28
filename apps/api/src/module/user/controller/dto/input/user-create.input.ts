import { Field, InputType } from '@nestjs/graphql';
import { IsUUID, IsUrl } from 'class-validator';
import type { User } from '#api/module/user/domain/user.model';

@InputType()
export class UserCreateInput implements Omit<User, 'id' | 'fingerprintId' | 'lostAndFoundState' | 'createdAt'> {
  @Field(() => String, { nullable: false })
  @IsUUID()
  authId!: string;

  @Field(() => String, { nullable: false })
  @IsUrl()
  avatarUrl!: string;
}
