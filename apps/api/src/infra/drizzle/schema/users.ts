import { relations } from 'drizzle-orm';
import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { relationKey } from './constant/relation-key';
import { lostAndFoundStateEnum } from './enum/lost-and-found-state';
import { lostItems } from './lost-items';

export const users = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  authId: uuid('auth_id').unique().notNull(),
  // TODO: Change to varchar or uuid as soon as the format of the string is known.
  fingerprintId: text('fingerprint_id').unique(),
  lostAndFoundState: lostAndFoundStateEnum('lost_and_found_state').notNull().default('NONE'),
  avatarUrl: text('avatar_url').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

export const usersRelations = relations(users, ({ many }) => ({
  reportedLostItems: many(lostItems, { relationName: relationKey['reporter-and-reported-lost-items'] }),
  retrievedLostItems: many(lostItems, { relationName: relationKey['owner-and-retrieved-lost-items'] }),
}));
