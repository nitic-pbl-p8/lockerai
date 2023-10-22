import { relations } from 'drizzle-orm';
import { pgTable, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';
import { relationKey } from './constant/relation-key';
import { drawers } from './drawers';

export const lockers = pgTable('lockers', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: varchar('name', { length: 32 }).unique().notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

export const lockersRelations = relations(lockers, ({ many }) => ({
  drawers: many(drawers, { relationName: relationKey['locker-and-drawers'] }),
}));
