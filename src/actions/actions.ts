'use server'

import { createLessonFolder } from '@/data-access-layer/create-lesson'
import { folderFormSchema } from '@/lib/validation/folder/folder'

export const createLessonAction = async (formData: FormData) => {
  const rawData = {
    title: formData.get('title') as string,
    description: (formData.get('description') as string) || '',
    visibility: formData.get('visibility'),
    tags: (formData.get('tags') as string).split(' '),
  }

  // Validate with Zod
  const result = await folderFormSchema.safeParse(rawData)
  if (!result.success) return { success: false, error: result.error }

  await createLessonFolder({
    ...result.data,
  })

  return { success: true, data: result.data }
}
