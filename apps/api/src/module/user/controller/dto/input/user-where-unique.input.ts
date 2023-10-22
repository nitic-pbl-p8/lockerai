import { Field, ID, InputType } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';
import type { User } from '#api/module/user/domain/user.model';

@InputType()
export class UserWhereUniqueInput implements Record<'userId', User['id']> {
  @Field(() => ID, { nullable: false })
  @IsUUID()
  userId!: string;
}
