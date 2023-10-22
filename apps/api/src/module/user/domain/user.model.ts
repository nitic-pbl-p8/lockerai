type UserLostAndFoundState = 'NONE' | 'DELIVERING' | 'RETRIEVING';

export class User {
  readonly id: string;

  readonly authId: string;

  readonly fingerprintId: string | null;

  readonly lostAndFoundState: UserLostAndFoundState;

  readonly createdAt: Date;

  constructor({ id, authId, fingerprintId, lostAndFoundState, createdAt }: Omit<User, 'isPinned'>) {
    this.id = id;
    this.authId = authId;
    this.fingerprintId = fingerprintId;
    this.lostAndFoundState = lostAndFoundState;
    this.createdAt = createdAt;
  }
}
