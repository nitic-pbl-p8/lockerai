import { Module } from '@nestjs/common';
import { InjectionToken } from '#api/common/constant/injection-token';
import { UserMutation } from './controller/user-mutation.resolver';
import { UserQuery } from './controller/user-query.resolver';
import { UserRepository } from './repository/impl/user.repository';
import { UserUseCase } from './use-case/impl/user.use-case';

@Module({
  providers: [
    { provide: InjectionToken.USER_REPOSITORY, useClass: UserRepository },
    { provide: InjectionToken.USER_USE_CASE, useClass: UserUseCase },
    UserQuery,
    UserMutation,
  ],
  exports: [{ provide: InjectionToken.USER_REPOSITORY, useClass: UserRepository }],
})
export class UserModule {}
