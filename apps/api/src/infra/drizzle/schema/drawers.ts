import { relations } from 'drizzle-orm';
import { pgTable, serial, timestamp, uuid } from 'drizzle-orm/pg-core';
import { relationKey } from './constant/relation-key';
import { lockers } from './lockers';
import { lostItems } from './lost-items';

export const drawers = pgTable('drawers', {
  id: serial('id').primaryKey(),
  lockerId: uuid('locker_id')
    .references(() => lockers.id)
    .notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

export const drawersRelations = relations(drawers, ({ one }) => ({
  locker: one(lockers, { fields: [drawers.lockerId], references: [lockers.id], relationName: relationKey['locker-and-drawers'] }),
  lostItem: one(lostItems, { fields: [drawers.id], references: [lostItems.drawerId], relationName: relationKey['drawer-and-lost-item'] }),
}));
