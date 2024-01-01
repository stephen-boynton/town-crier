import { pgTable, serial, text, varchar, pgEnum, uuid } from "drizzle-orm/pg-core";
import { ARCHETYPE } from "../_types";

const archetypeEnums = pgEnum('archetype', Object.values(ARCHETYPE));

export const user = pgTable('user', {
  id: uuid('id').primaryKey(),
  firstName: text('first_name'),
  lastName: text('last_name'),
  handle: varchar('handle', { length: 256 }),
  accountName: varchar('account_name', { length: 256 }),
  userId: uuid('user_id'),
  archetype: archetypeEnums('archetype'),
});

export const raven = pgTable('raven', {
  id: uuid('id').primaryKey(),
  userId: serial('user_id'),
  message: text('message'),
  original: text('original'),
  createdAt: text('created_at'),
  archetype: archetypeEnums('archetype'),
});
