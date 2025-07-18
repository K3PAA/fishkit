import { pgEnum, pgTable } from 'drizzle-orm/pg-core'
import * as t from 'drizzle-orm/pg-core'

export const rolesEnum = pgEnum('roles', ['user', 'premium', 'admin'])
export const themeEnum = pgEnum('theme', ['dark', 'light', 'system'])
export const learningModeEnum = pgEnum('learning_mode', [
  'front-to-back',
  'back-to-front',
])

export const user = pgTable('users', {
  id: t.varchar().notNull().primaryKey(), // kindeId
  role: rolesEnum().default('user'),
})

export const userPreferences = pgTable('user_preferences', {
  userId: t
    .varchar('user_id')
    .notNull()
    .primaryKey()
    .references(() => user.id),
  theme: themeEnum().default('system'),
  learningMode: learningModeEnum('learning_mode').default('front-to-back'),
  flashcardsPerLesson: t.integer('flashcards_per_lesson').default(15),
})

export const userBookmarks = pgTable('user_bookmarks', {
  id: t.serial().notNull().primaryKey(),
  userId: t
    .varchar('user_id')
    .notNull()
    .references(() => user.id),
  lessonId: t.varchar('lesson_id').notNull(),
  favorite: t.boolean().default(false),
})

export const userEntries = pgTable('user_entries', {
  id: t.serial().notNull().primaryKey(),
  userId: t
    .varchar('user_id')
    .notNull()
    .references(() => user.id),
  cardId: t.varchar('card_id').notNull(),
  lessonId: t.varchar('lesson_id').notNull(),
  totalTries: t.integer('total_tries').default(0),
  totalSuccessful: t.integer('total_successful').default(0),
  isLastTrySuccessful: t.boolean('is_last_try_successful'),
  lastDate: t.timestamp('last_date'),
})
