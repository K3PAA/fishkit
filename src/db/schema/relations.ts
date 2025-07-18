import { relations } from 'drizzle-orm'
import { user, userPreferences, userBookmarks, userEntries } from './users'
import { lesson, lessonTags } from './lessons'
import { card, cardFace } from './cards'

// User relations
export const userRelations = relations(user, ({ many, one }) => ({
  preferences: one(userPreferences, {
    fields: [user.id],
    references: [userPreferences.userId],
  }),
  bookmarks: many(userBookmarks),
  entries: many(userEntries),
  lessons: many(lesson),
  cards: many(card),
}))

// User Preferences relation
export const userPreferencesRelations = relations(
  userPreferences,
  ({ one }) => ({
    user: one(user, {
      fields: [userPreferences.userId],
      references: [user.id],
    }),
  }),
)

// User Bookmarks relation
export const userBookmarksRelations = relations(userBookmarks, ({ one }) => ({
  user: one(user, {
    fields: [userBookmarks.userId],
    references: [user.id],
  }),
  lesson: one(lesson, {
    fields: [userBookmarks.lessonId],
    references: [lesson.id],
  }),
}))

// User Entries relation
export const userEntriesRelations = relations(userEntries, ({ one }) => ({
  user: one(user, {
    fields: [userEntries.userId],
    references: [user.id],
  }),
  card: one(card, {
    fields: [userEntries.cardId],
    references: [card.id],
  }),
  lesson: one(lesson, {
    fields: [userEntries.lessonId],
    references: [lesson.id],
  }),
}))

// Lesson relations
export const lessonRelations = relations(lesson, ({ one, many }) => ({
  user: one(user, {
    fields: [lesson.userId],
    references: [user.id],
  }),
  tags: many(lessonTags),
  cards: many(card),
}))

// Lesson Tags relation
export const lessonTagsRelations = relations(lessonTags, ({ one }) => ({
  lesson: one(lesson, {
    fields: [lessonTags.lessonId],
    references: [lesson.id],
  }),
}))

// Card relations
export const cardRelations = relations(card, ({ one }) => ({
  user: one(user, {
    fields: [card.userId],
    references: [user.id],
  }),
  lesson: one(lesson, {
    fields: [card.lessonId],
    references: [lesson.id],
  }),
  front: one(cardFace, {
    fields: [card.frontId],
    references: [cardFace.id],
  }),
  back: one(cardFace, {
    fields: [card.backId],
    references: [cardFace.id],
  }),
}))

// CardFace relations (no direct relations needed, but could add cards referencing this face)
