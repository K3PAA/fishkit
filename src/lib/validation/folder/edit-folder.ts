import z from 'zod'

export const folderFormSchema = z.object({
  title: z
    .string()
    .min(2, { message: 'Title must be at least 2 characters.' })
    .max(30, { message: 'Title max 30 characters.' }),
  description: z
    .string()
    .max(200, { message: 'Description max 200 characters.' })
    .optional(),
  visibility: z.enum(['public', 'private'], {
    message: 'Select visibility.',
  }),
})
