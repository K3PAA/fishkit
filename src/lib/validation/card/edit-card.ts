import z from 'zod'

export const editCardSchema = z.object({
  front: z.object({
    title: z.string().min(1, { message: 'Title is required' }),
    usage: z.string().optional(),
    definition: z.string().optional(),
    synonyms: z.array(z.string()),
    antonyms: z.array(z.string()),
  }),
  back: z.object({
    title: z.string().min(1, { message: 'Title is required' }),
    usage: z.string().optional(),
    definition: z.string().optional(),
    synonyms: z.array(z.string()),
    antonyms: z.array(z.string()),
  }),
})
