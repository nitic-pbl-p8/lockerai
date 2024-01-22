import type { Locker } from '#api/module/locker/domain/locker.model';

// eslint-disable-next-line no-shadow
export enum PubSubTrigger {
  UPDATED_CHALLENGE = 'updatedChallenge',
}

export const createUpdatedChallengeTrigger = (lockerId: Locker['id']): string => `${PubSubTrigger.UPDATED_CHALLENGE}_${lockerId}`;
