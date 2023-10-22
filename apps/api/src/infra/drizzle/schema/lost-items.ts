import { relations } from 'drizzle-orm';
import { pgTable, serial, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { relationKey } from './constant/relation-key';
import { drawers } from './drawers';
import { users } from './users';

export const lostItems = pgTable('lost_items', {
  id: uuid('id').primaryKey().defaultRandom(),
  // TODO: Determine the best json type according to the Google Vision API response.
  // features: jsonb('features').notNull(),
  imageUrls: text('image_urls').array().notNull(),
  drawerId: serial('drawer_id').references(() => drawers.id),
  reporterId: uuid('reporter_id')
    .references(() => users.id)
    .notNull(),
  ownerId: uuid('owner_id').references(() => users.id),
  reportedAt: timestamp('reported_at').notNull().defaultNow(),
  deliveredAt: timestamp('delivered_at'),
  retrievedAt: timestamp('retrieved_at'),
});

export const lostItemsRelations = relations(lostItems, ({ one }) => ({
  drawer: one(drawers, { fields: [lostItems.drawerId], references: [drawers.id], relationName: relationKey['drawer-and-lost-item'] }),
  reporter: one(users, { fields: [lostItems.reporterId], references: [users.id], relationName: relationKey['reporter-and-reported-lost-items'] }),
  owner: one(users, { fields: [lostItems.ownerId], references: [users.id], relationName: relationKey['owner-and-retrieved-lost-items'] }),
}));
