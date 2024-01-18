import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectionToken } from '#api/common/constant/injection-token';
import type { Drawer } from '#api/module/drawer/domain/drawer.model';
// TODO: Once this issue is resolved, modify to use `import type` syntax.
// https://github.com/typescript-eslint/typescript-eslint/issues/5468
import { type DrawerRepositoryInterface } from '#api/module/drawer/repository/drawer.repository';
import type { DrawerUseCaseInterface } from '#api/module/drawer/use-case/drawer.use-case';
import { type LostItemRepositoryInterface } from '#api/module/lost-item/repository/lost-item.repository';
import { type UserRepositoryInterface } from '#api/module/user/repository/user.repository';

@Injectable()
export class DrawerUseCase implements DrawerUseCaseInterface {
  constructor(
    @Inject(InjectionToken.DRAWER_REPOSITORY)
    private readonly drawerRepository: DrawerRepositoryInterface,
    @Inject(InjectionToken.LOST_ITEM_REPOSITORY)
    private readonly lostItemRepository: LostItemRepositoryInterface,
    @Inject(InjectionToken.USER_REPOSITORY)
    private readonly userRepository: UserRepositoryInterface,
  ) {}

  async putInLostItem(
    reporterHashedFingerprintId: Parameters<DrawerUseCaseInterface['putInLostItem']>[0],
    lostItemId: Parameters<DrawerUseCaseInterface['putInLostItem']>[1],
  ): Promise<Drawer | null> {
    const [foundLostItem, foundReporter] = await Promise.all([
      this.lostItemRepository.find(lostItemId),
      this.userRepository.findByReportedLostItemId(lostItemId),
    ]);
    if (!foundLostItem) {
      throw new HttpException('Lost item not found. The lostItemId may be invalid.', HttpStatus.NOT_FOUND);
    }
    if (foundLostItem.hasRetrieved) {
      throw new HttpException('The lost item has already been retrieved.', HttpStatus.BAD_REQUEST);
    }
    if (foundLostItem.drawerId) {
      throw new HttpException('The lost item is already stored in a drawer.', HttpStatus.BAD_REQUEST);
    }
    if (!foundReporter) {
      throw new HttpException('User not found. The hashedFingerprintId may be invalid.', HttpStatus.NOT_FOUND);
    }
    if (reporterHashedFingerprintId !== foundReporter.hashedFingerprintId) {
      throw new HttpException('fingerprint is invalid.', HttpStatus.BAD_REQUEST);
    }

    const foundDrawer = await this.drawerRepository.findEmpty();
    if (!foundDrawer) {
      return null;
    }

    const updatedDrawer = await this.drawerRepository.connectLostItem(foundDrawer.id, lostItemId);

    await Promise.all([
      this.lostItemRepository.update(lostItemId, { deliveredAt: new Date() }),
      this.userRepository.updateByHashedFingerprintId(reporterHashedFingerprintId, { lostAndFoundState: 'NONE' }),
    ]);

    return updatedDrawer;
  }

  async takeOutLostItem(
    ownerHashedFingerprintId: Parameters<DrawerUseCaseInterface['takeOutLostItem']>[0],
    lostItemId: Parameters<DrawerUseCaseInterface['takeOutLostItem']>[1],
  ): Promise<Drawer | null> {
    const foundOwner = await this.userRepository.findByOwnedLostItemId(lostItemId);
    if (!foundOwner) {
      throw new HttpException('User not found. The hashedFingerprintId may be invalid.', HttpStatus.NOT_FOUND);
    }
    if (ownerHashedFingerprintId !== foundOwner.hashedFingerprintId) {
      throw new HttpException('fingerprint is invalid.', HttpStatus.BAD_REQUEST);
    }

    const foundDrawer = await this.drawerRepository.findByLostItemId(lostItemId);
    if (!foundDrawer) {
      return null;
    }

    const updatedDrawer = await this.drawerRepository.disconnectLostItem(foundDrawer.id);

    await Promise.all([
      this.lostItemRepository.update(lostItemId, { retrievedAt: new Date() }),
      this.userRepository.updateByHashedFingerprintId(ownerHashedFingerprintId, { lostAndFoundState: 'NONE' }),
    ]);

    return updatedDrawer;
  }
}
