export class LostItem {
  readonly id: string;

  readonly title: string;

  readonly description: string;

  readonly imageUrls: string[];

  readonly drawerId: number | null;

  readonly reporterId: string;

  readonly ownerId: string | null;

  readonly reportedAt: Date;

  readonly deliveredAt: Date | null;

  readonly retrievedAt: Date | null;

  constructor({
    id,
    title,
    description,
    imageUrls,
    drawerId,
    reporterId,
    ownerId,
    reportedAt,
    deliveredAt,
    retrievedAt,
  }: Omit<LostItem, 'hasRetrieved'>) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imageUrls = imageUrls;
    this.drawerId = drawerId;
    this.reporterId = reporterId;
    this.ownerId = ownerId;
    this.reportedAt = reportedAt;
    this.deliveredAt = deliveredAt;
    this.retrievedAt = retrievedAt;
  }

  get hasRetrieved(): boolean {
    return this.retrievedAt !== null;
  }
}