import { pgTable } from 'drizzle-orm/pg-core'
import * as t from 'drizzle-orm/pg-core'
import { user } from './users'
import { lesson } from './lessons'
import { timestamps } from '../columns/helpers'

export const cardFace = pgTable('card_face', {
  id: t.serial().notNull().primaryKey(),
  title: t.varchar().notNull(),
  description: t.text(),
  example: t.text(),
  synonyms: t.varchar().array(),
  antonyms: t.varchar().array(),
})

export const card = pgTable('cards', {
  id: t.varchar().notNull().primaryKey(),
  userId: t
    .varchar('user_id')
    .notNull()
    .references(() => user.id),
  lessonId: t
    .varchar('lesson_id')
    .notNull()
    .references(() => lesson.id),
  frontId: t
    .integer('front_id')
    .notNull()
    .references(() => cardFace.id),
  backId: t
    .integer('back_id')
    .notNull()
    .references(() => cardFace.id),
  ...timestamps,
})
