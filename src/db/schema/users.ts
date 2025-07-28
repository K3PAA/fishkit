import { pgEnum, pgTable } from 'drizzle-orm/pg-core'
import * as t from 'drizzle-orm/pg-core'
import { lessonsTable } from './lessons'
import { cardsTable } from './cards'

export const entryStatusEnum = pgEnum('status', ['successful', 'unsuccessful'])
export const userRoleEnum = pgEnum('role', ['user', 'pro', 'admin'])
export const learningModeEnum = pgEnum('learning_mode', [
  'front-to-back',
  'back-to-front',
])
export const themeEnum = pgEnum('theme', ['dark', 'light', 'system'])

export const usersTable = pgTable('users', {
  id: t.varchar('id').notNull().primaryKey(), // <- will be set to id from Kinde
  role: userRoleEnum('role').notNull().default('user'),

  createdAt: t.timestamp('created_at').notNull().defaultNow(),
  updatedAt: t
    .timestamp('updated_at')
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
})

export const entriesTable = pgTable('entries', {
  id: t.uuid('id').defaultRandom().primaryKey(),
  userId: t
    .varchar('user_id')
    .notNull()
    .references(() => usersTable.id),
  cardId: t
    .uuid('card_id')
    .notNull()
    .references(() => cardsTable.id),

  status: entryStatusEnum().notNull(),

  createdAt: t.timestamp('created_at').notNull().defaultNow(),
})

export const favoritesTable = pgTable('favorites', {
  id: t.uuid('id').defaultRandom().primaryKey(),
  userId: t
    .varchar('user_id')
    .notNull()
    .references(() => usersTable.id),
  lessonId: t
    .uuid('lesson_id')
    .notNull()
    .references(() => lessonsTable.id),
})

export const bookmarksTable = pgTable('bookmars', {
  id: t.uuid('id').defaultRandom().primaryKey(),
  userId: t
    .varchar('user_id')
    .notNull()
    .references(() => usersTable.id),
  lessonId: t
    .uuid('lesson_id')
    .notNull()
    .references(() => lessonsTable.id),
})

export const settingsTalbe = pgTable('settings', {
  id: t.uuid('id').defaultRandom().primaryKey(),
  userId: t
    .varchar('user_id')
    .notNull()
    .references(() => usersTable.id),
  learningMode: learningModeEnum('learning_mode').default('front-to-back'),
  cardsPerLesson: t.integer('cards_per_lesson').default(15),
  theme: themeEnum(),
})
