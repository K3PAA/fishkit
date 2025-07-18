import z from 'zod'
import { folderFormSchema } from './validation/folder/edit-folder'

export type CardFace = {
  title: string
  example: string
  definition: string
  synonym?: string[]
  antonym?: string[]
}

export type CardT = {
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
  cards: CardT[]
  tags: { id: string; text: string }[]
  visibility: 'public' | 'private'
  isFavorite: boolean
  createdAt: Date
  updatedAt: Date
}

export type MockData = Folder[]

export type FolderSchemaT = z.infer<typeof folderFormSchema>
