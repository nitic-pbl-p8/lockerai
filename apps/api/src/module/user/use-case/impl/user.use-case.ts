import { Inject, Injectable } from '@nestjs/common';
import { InjectionToken } from '#api/common/constant/injection-token';
import { type LostItemRepositoryInterface } from '#api/module/lost-item/repository/lost-item.repository';
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
    @Inject(InjectionToken.LOST_ITEM_REPOSITORY)
    private readonly lostItemRepository: LostItemRepositoryInterface,
  ) {}

  async findUser(authId: Parameters<UserUseCaseInterface['findUser']>[0]): Promise<User | null> {
    const foundUser = await this.userRepository.findByAuthId(authId);

    return foundUser;
  }

  async findUserByHashedFingerprintId(
    hashedFingerprintId: Parameters<UserUseCaseInterface['findUserByHashedFingerprintId']>[0],
  ): Promise<User | null> {
    const foundUser = await this.userRepository.findByHashedFingerprintId(hashedFingerprintId);

    return foundUser;
  }

  async createUser(user: Parameters<UserUseCaseInterface['createUser']>[0]): Promise<User> {
    const createdUser = await this.userRepository.create(user);

    return createdUser;
  }

  async relateFingerprintWithUser(
    authId: Parameters<UserUseCaseInterface['relateFingerprintWithUser']>[0],
    hashedFingerprintId: Parameters<UserUseCaseInterface['relateFingerprintWithUser']>[1],
  ): Promise<User> {
    const updatedUser = await this.userRepository.updateByAuthId(authId, { hashedFingerprintId });

    return updatedUser;
  }

  async applyLostItemOwner(
    authId: Parameters<UserUseCaseInterface['applyLostItemOwner']>[0],
    lostItemId: Parameters<UserUseCaseInterface['applyLostItemOwner']>[1],
  ): Promise<User> {
    const [lostItem, owner, reporter] = await Promise.all([
      this.lostItemRepository.find(lostItemId),
      this.userRepository.findByAuthId(authId),
      this.userRepository.findByReportedLostItemId(lostItemId),
    ]);
    if (!lostItem) {
      throw new Error('Lost item not found. The lostItemId may be invalid.');
    }
    if (lostItem.hasRetrieved) {
      throw new Error('The lost item has already been retrieved.');
    }
    if (!owner) {
      throw new Error('User not found. The authId may be invalid.');
    }
    if (owner.isOnTheWay) {
      throw new Error(`The user is already in ${owner.lostAndFoundState} state.`);
    }
    if (!reporter) {
      throw new Error('The lost item reporter not found. The lostItemId may be invalid.');
    }
    if (owner.id === reporter.id) {
      throw new Error('The lost item reporter and the owner are the same person.');
    }

    const updatedUser = await this.userRepository.connectOwnedLostItemsByAuthId(authId, lostItemId);

    await this.userRepository.updateByAuthId(authId, { lostAndFoundState: 'RETRIEVING' });

    return updatedUser;
  }
}
