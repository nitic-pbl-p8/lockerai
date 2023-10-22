import { Inject, Logger, ValidationPipe } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { InjectionToken } from '#api/common/constant/injection-token';
import type { User } from '#api/module/user/domain/user.model';
// TODO: Once this issue is resolved, modify to use `import type` syntax.
// https://github.com/typescript-eslint/typescript-eslint/issues/5468
import { type UserUseCaseInterface } from '#api/module/user/use-case/user.use-case';
import { UserCreateInput } from './dto/input/user-create.input';
import { UserObject } from './dto/object/user.object';

@Resolver()
export class UserMutation {
  private readonly logger = new Logger(UserMutation.name);

  constructor(
    @Inject(InjectionToken.USER_USE_CASE)
    private readonly userUseCase: UserUseCaseInterface,
  ) {}

  @Mutation(() => UserObject)
  async createUser(
    @Args('user', { type: () => UserCreateInput }, ValidationPipe)
    user: UserCreateInput,
  ): Promise<User> {
    this.logger.log(`${this.createUser.name} called`);

    const createdUser = await this.userUseCase.createUser(user);

    return createdUser;
  }
}
