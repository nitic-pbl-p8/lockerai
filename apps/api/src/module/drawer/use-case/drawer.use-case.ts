import type { Drawer } from '#api/module/drawer/domain/drawer.model';
import type { User } from '#api/module/user/domain/user.model';

export interface DrawerUseCaseInterface {
  putInLostItem(reporterHashedFingerprintId: NonNullable<User['hashedFingerprintId']>): Promise<Drawer>;
  takeOutLostItem(ownerHashedFingerprintId: NonNullable<User['hashedFingerprintId']>): Promise<Drawer>;
}
