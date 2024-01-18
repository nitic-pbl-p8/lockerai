import { Module, forwardRef } from '@nestjs/common';
import { InjectionToken } from '#api/common/constant/injection-token';
import { DrawerModule } from '#api/module/drawer/drawer.module';
import { LockerResolver } from './controller/locker.resolver';
import { LockerDrawersDataLoader } from './dataloader/locker-drawers.dataloader';
import { LockerDataLoader } from './dataloader/locker.dataloader';
import { LockerRepository } from './repository/impl/locker.repository';

@Module({
  imports: [forwardRef(() => DrawerModule)],
  providers: [LockerDataLoader, LockerDrawersDataLoader, { provide: InjectionToken.LOCKER_REPOSITORY, useClass: LockerRepository }, LockerResolver],
  exports: [LockerDataLoader, LockerDrawersDataLoader, { provide: InjectionToken.LOCKER_REPOSITORY, useClass: LockerRepository }],
})
export class LockerModule {}
