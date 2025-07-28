import 'server-only'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation'
import { cache } from 'react'
import { db } from '@/db'
import { usersTable } from '@/db/schema/users'
import { eq } from 'drizzle-orm'

export const requireKindeUser = cache(async () => {
  const { getUser } = getKindeServerSession()
  const user = await getUser()

  if (!user) redirect('/api/auth/login')

  return user
})

const getDatabaseUserOrcreateOne = async (id: string) => {
  const [user] = await db.select().from(usersTable).where(eq(usersTable.id, id))
  if (user) return { isError: false, user: user }

  try {
    const [newUser] = await db.insert(usersTable).values({ id }).returning()
    return { isError: false, user: newUser }
  } catch (error) {
    return {
      isError: true,
      error: error,
    }
  }
}

export const requireDatabaseUser = cache(async () => {
  const user = await requireKindeUser()
  const databaseUser = await getDatabaseUserOrcreateOne(user.id)

  return databaseUser
})
