import {
  usersTable,
  bookmarksTable,
  entriesTable,
  favoritesTable,
  settingsTalbe,
} from './users'

import { lessonsTable } from './lessons'
import { cardsTable } from './cards'
import { relations } from 'drizzle-orm'

export const usersRelations = relations(usersTable, ({ one, many }) => ({
  settings: one(settingsTalbe),
  lessons: many(lessonsTable),
  entries: many(entriesTable),
  favorites: many(favoritesTable),
  bookmarks: many(bookmarksTable),
}))

export const settingsRelations = relations(settingsTalbe, ({ one }) => ({
  user: one(usersTable, {
    fields: [settingsTalbe.userId],
    references: [usersTable.id],
  }),
}))

export const favoritesRelations = relations(favoritesTable, ({ one }) => ({
  user: one(usersTable, {
    fields: [favoritesTable.userId],
    references: [usersTable.id],
  }),
}))

export const bookmarksRelations = relations(bookmarksTable, ({ one }) => ({
  user: one(usersTable, {
    fields: [bookmarksTable.userId],
    references: [usersTable.id],
  }),
}))

export const entriesRelations = relations(entriesTable, ({ one }) => ({
  user: one(usersTable, {
    fields: [entriesTable.userId],
    references: [usersTable.id],
  }),
}))

export const lessonsRelations = relations(lessonsTable, ({ one, many }) => ({
  user: one(usersTable, {
    fields: [lessonsTable.userId],
    references: [usersTable.id],
  }),
  cards: many(cardsTable),
}))

export const cardsRelations = relations(cardsTable, ({ one, many }) => ({
  lesson: one(lessonsTable, {
    fields: [cardsTable.lessonId],
    references: [lessonsTable.id],
  }),
}))
