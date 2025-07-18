import { pgEnum, pgTable } from 'drizzle-orm/pg-core'
import * as t from 'drizzle-orm/pg-core'
import { user } from './users'
import { timestamps } from '../columns/helpers'

export const visibilityEnum = pgEnum('visibility', ['public', 'private'])

export const lesson = pgTable('lessons', {
  id: t.varchar().notNull().primaryKey(),
  userId: t
    .varchar('user_id')
    .notNull()
    .references(() => user.id),
  title: t.varchar().notNull(),
  description: t.text(),
  visibility: visibilityEnum().default('public'),
  ...timestamps,
})

export const lessonTags = pgTable('lesson_tags', {
  id: t.serial().notNull().primaryKey(),
  lessonId: t
    .varchar('lesson_id')
    .notNull()
    .references(() => lesson.id),
  tag: t.varchar().notNull(),
})
