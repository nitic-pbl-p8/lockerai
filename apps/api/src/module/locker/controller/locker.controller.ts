import { Body, Controller, HttpCode, Inject, Logger, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { InjectionToken } from '#api/common/constant/injection-token';
// TODO: Once this issue is resolved, modify to use `import type` syntax.
// https://github.com/typescript-eslint/typescript-eslint/issues/5468
import { type LockerPublishUseCaseInterface } from '#api/module/locker/use-case/locker-publish.use-case';
import { UpdateChallengeBody } from './dto/body/update-challenge.body';

@Controller()
export class LockerController {
  private readonly logger = new Logger(LockerController.name);

  constructor(
    @Inject(InjectionToken.LOCKER_PUBLISH_USE_CASE)
    private readonly lockerPublishUseCase: LockerPublishUseCaseInterface,
  ) {}

  @Post('/lockers/:id/challenge')
  @HttpCode(204)
  @UsePipes(ValidationPipe)
  async updateChallenge(@Param('id') lockerId: string, @Body() updateChallengeBody: UpdateChallengeBody): Promise<void> {
    this.logger.log(`${this.updateChallenge.name} called`);

    await this.lockerPublishUseCase.publishUpdatedChallenge(lockerId, () => ({
      updatedChallenge: {
        hashedFingerprintId: updateChallengeBody.hashedFingerprintId,
      },
    }));
  }
}
