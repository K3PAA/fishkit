import z from 'zod'

export const editCardSchema = z.object({
  front: z.object({
    title: z.string(),
    usage: z.string().optional(),
    definition: z.string().optional(),
    synonym: z.array(z.string()),
    antonym: z.array(z.string()),
  }),
  back: z.object({
    title: z.string(),
    usage: z.string().optional(),
    definition: z.string().optional(),
    synonym: z.array(z.string()),
    antonym: z.array(z.string()),
  }),
})
