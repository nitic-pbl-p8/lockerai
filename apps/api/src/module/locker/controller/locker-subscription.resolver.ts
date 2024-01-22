import { Args, Resolver, Subscription } from '@nestjs/graphql';
import { createUpdatedChallengeTrigger } from '#api/common/constant/pubsub';
import type { PubSubTrigger } from '#api/common/constant/pubsub';
import { PubSubService } from '#api/common/service/pubsub/pubsub.service';
import type { Challenge } from '#api/module/locker/domain/challenge.model';
import { LockerWhereUniqueInput } from './dto/input/locker-where-unique.input';
import { ChallengeObject } from './dto/object/challenge.object';

@Resolver()
export class LockerSubscription implements Record<PubSubTrigger.UPDATED_CHALLENGE, unknown> {
  constructor(private readonly pubSubService: PubSubService) {}

  @Subscription(() => ChallengeObject, { nullable: true })
  async updatedChallenge(@Args('where', { type: () => LockerWhereUniqueInput }) where: LockerWhereUniqueInput): Promise<AsyncIterator<Challenge>> {
    return this.pubSubService.asyncIterator(createUpdatedChallengeTrigger(where.id));
  }
}
