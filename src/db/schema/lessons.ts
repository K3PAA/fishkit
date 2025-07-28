import { pgEnum, pgTable, timestamp, uuid, varchar } from 'drizzle-orm/pg-core'
import { usersTable } from './users'

export const visibilityEnum = pgEnum('visibility', ['public', 'private'])

export const lessonsTable = pgTable('lessons', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: varchar('user_id')
    .notNull()
    .references(() => usersTable.id),

  title: varchar('title').notNull(),
  description: varchar('description'),
  tags: varchar('tags').array().default([]),
  visibility: visibilityEnum('visibility').default('public').notNull(),

  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at')
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
})
