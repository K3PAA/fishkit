import { pgTable, uuid, varchar, timestamp } from 'drizzle-orm/pg-core'
import { lessonsTable } from './lessons'

export const cardsTable = pgTable('cards', {
  id: uuid('id').defaultRandom().primaryKey(),
  lessonId: uuid('lesson_id')
    .notNull()
    .references(() => lessonsTable.id),

  frontWord: varchar('front_word').notNull(),
  frontTranslation: varchar('front_translation'),
  frontExample: varchar('front_example'),
  frontSynonyms: varchar('front_synonyms').array().default([]),
  frontAntonyms: varchar('front_antonyms').array().default([]),

  backWord: varchar('back_word').notNull(),
  backTranslation: varchar('back_translation'),
  backExample: varchar('back_example'),
  backSynonyms: varchar('back_synonyms').array().default([]),
  backAntonyms: varchar('back_antonyms').array().default([]),

  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at')
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
})
