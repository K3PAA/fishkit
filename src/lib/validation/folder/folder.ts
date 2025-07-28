import z from 'zod'

export const folderFormSchema = z.object({
  title: z
    .string()
    .min(2, { message: 'Title must be at least 2 characters.' })
    .max(30, { message: 'Title max 30 characters.' }),
  description: z
    .string()
    .max(200, { message: 'Description max 200 characters.' }),
  visibility: z.enum(['public', 'private'], {
    message: 'Select visibility.',
  }),
  tags: z.array(z.string()),
})

export const CardSchema = z.object({
  front: {
    title: z
      .string()
      .min(1, { message: 'Title must be at least 1 characters.' }),
    example: z.string().optional(),
    definition: z.string().optional(),
  },
  back: {
    title: z
      .string()
      .min(1, { message: 'Title must be at least 1 characters.' }),
    example: z.string().optional(),
    definition: z.string().optional(),
  },
})
