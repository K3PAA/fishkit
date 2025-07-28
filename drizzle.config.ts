import { config } from 'dotenv'
import { defineConfig } from 'drizzle-kit'

config({ path: '.env.local' })

export default defineConfig({
  schema: [
    './src/db/schema/cards.ts',
    './src/db/schema/lessons.ts',
    './src/db/schema/relations.ts',
    './src/db/schema/users.ts',
  ],
  out: './src/db/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
})
