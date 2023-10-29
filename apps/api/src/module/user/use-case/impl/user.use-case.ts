import { Inject, Injectable } from '@nestjs/common';
import { InjectionToken } from '#api/common/constant/injection-token';
import type { User } from '#api/module/user/domain/user.model';
// TODO: Once this issue is resolved, modify to use `import type` syntax.
// https://github.com/typescript-eslint/typescript-eslint/issues/5468
import { type UserRepositoryInterface } from '#api/module/user/repository/user.repository';
import type { UserUseCaseInterface } from '#api/module/user/use-case/user.use-case';

@Injectable()
export class UserUseCase implements UserUseCaseInterface {
  constructor(
    @Inject(InjectionToken.USER_REPOSITORY)
    private readonly userRepository: UserRepositoryInterface,
  ) {}

  async findUser(authId: Parameters<UserUseCaseInterface['findUser']>[0]): Promise<User | null> {
    const foundUser = await this.userRepository.findByAuthId(authId);

    return foundUser;
  }

  async createUser(user: Parameters<UserUseCaseInterface['createUser']>[0]): Promise<User> {
    const createdUser = await this.userRepository.create(user);

    return createdUser;
  }
}
