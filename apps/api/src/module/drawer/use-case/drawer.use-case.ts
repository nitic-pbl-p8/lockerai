import type { Drawer } from '#api/module/drawer/domain/drawer.model';
import type { LostItem } from '#api/module/lost-item/domain/lost-item.model';
import type { User } from '#api/module/user/domain/user.model';

export interface DrawerUseCaseInterface {
  putInLostItem(reporterHashedFingerprintId: NonNullable<User['hashedFingerprintId']>, lostItemId: LostItem['id']): Promise<Drawer | null>;
  takeOutLostItem(ownerHashedFingerprintId: NonNullable<User['hashedFingerprintId']>, lostItemId: LostItem['id']): Promise<Drawer | null>;
}
