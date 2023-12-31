import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';
import { UserLostAndFoundStateEnum } from '#api/module/user/controller/dto/enum/user-lost-and-found-state.enum';
import { User } from '#api/module/user/domain/user.model';

@ObjectType(User.name)
export class UserObject implements User {
  @Field(() => ID, { nullable: false })
  @IsUUID()
  id!: string;

  @Field(() => ID, { nullable: false })
  authId!: string;

  @Field(() => ID, { nullable: true })
  fingerprintId!: string | null;

  @Field(() => UserLostAndFoundStateEnum, { nullable: false })
  lostAndFoundState!: UserLostAndFoundStateEnum;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;
}
