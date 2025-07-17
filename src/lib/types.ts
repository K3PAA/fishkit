import z from 'zod'
import { folderFormSchema } from './validation/folder/edit-folder'

export type CardFace = {
  title: string
  example: string
  definition: string
}

export type Card = {
  id: number
  front: CardFace
  back: CardFace
  createdAt: Date
  updatedAt: Date
}

export type Folder = {
  id: number
  title: string
  description: string
  cards: Card[]
  tags: { id: string; text: string }[]
  visibility: 'public' | 'private'
  isFavorite: boolean
  createdAt: Date
  updatedAt: Date
}

export type MockData = Folder[]

export type FolderSchemaT = z.infer<typeof folderFormSchema>
