import { IsUUID } from 'class-validator';

export class UpdateConnectionBody {
  hashedFingerprintId!: string;

  @IsUUID()
  lostItemId!: string;
}
