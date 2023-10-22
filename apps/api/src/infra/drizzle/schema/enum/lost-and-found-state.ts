import { pgEnum } from 'drizzle-orm/pg-core';

export const lostAndFoundStateEnum = pgEnum('lost_and_found_state', ['NONE', 'DELIVERING', 'RETRIEVING']);
