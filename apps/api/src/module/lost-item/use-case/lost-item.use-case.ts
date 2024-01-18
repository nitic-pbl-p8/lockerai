import type { FileUpload } from 'graphql-upload/Upload.js';
import type { LostItem } from '#api/module/lost-item/domain/lost-item.model';

export interface LostItemUseCaseInterface {
  reportLostItem(
    lostItem: Omit<
      LostItem,
      'id' | 'title' | 'description' | 'imageUrls' | 'drawerId' | 'ownerId' | 'reportedAt' | 'deliveredAt' | 'retrievedAt' | 'hasRetrieved'
    >,
    imageFiles: FileUpload[],
  ): Promise<LostItem>;
  findSimilarLostItem(userDescription: string, lostAt: Date): Promise<LostItem | null>;
}
