import { db } from '@/db'
import { lessonsTable } from '@/db/schema/lessons'
import { requireDatabaseUser, requireKindeUser } from './require-user'

export const createLessonFolder = async ({
  title,
  visibility,
  description,
  tags,
}: {
  title: string
  visibility: 'public' | 'private'
  description: string
  tags: string[]
}) => {
  const data = await requireDatabaseUser()
  if (data.isError) return { msg: 'no user' }

  await db.insert(lessonsTable).values({
    userId: data.user!.id,
    title,
    description,
    tags,
    visibility,
  })
}
