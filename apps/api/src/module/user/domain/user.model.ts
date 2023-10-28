type UserLostAndFoundState = 'NONE' | 'DELIVERING' | 'RETRIEVING';

export class User {
  readonly id: string;

  readonly authId: string;

  readonly fingerprintId: string | null;

  readonly lostAndFoundState: UserLostAndFoundState;

  readonly avatarUrl: string;

  readonly createdAt: Date;

  constructor({ id, authId, fingerprintId, lostAndFoundState, avatarUrl, createdAt }: User) {
    this.id = id;
    this.authId = authId;
    this.fingerprintId = fingerprintId;
    this.lostAndFoundState = lostAndFoundState;
    this.avatarUrl = avatarUrl;
    this.createdAt = createdAt;
  }
}
