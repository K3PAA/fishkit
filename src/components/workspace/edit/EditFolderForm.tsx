'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { Folder, FolderSchemaT } from '@/lib/types'
import { folderFormSchema } from '@/lib/validation/folder/edit-folder'
import DescriptionField from './form/folder/DescriptionField'
import TagsField from './form/folder/TagsField'
import TitleField from './form/folder/TitleField'
import PrivateField from './form/folder/VisibilityField'
import { FileCheck } from 'lucide-react'

type EditFolderFormProps = {
  folder: Folder
}

export default function EditFolderForm({ folder }: EditFolderFormProps) {
  const form = useForm<FolderSchemaT>({
    resolver: zodResolver(folderFormSchema),
    mode: 'onChange',
    defaultValues: {
      title: folder.title,
      description: folder.description,
      visibility: folder.visibility,
      tags: folder.tags,
    },
  })

  return (
    <Form {...form}>
      <h2 className='my-4 text-3xl'>Update Folder Info</h2>
      <form action={() => {}} className='grid gap-4'>
        <div className='grid gap-4 md:grid-cols-2'>
          <TitleField control={form.control} />
          <PrivateField control={form.control} />
        </div>

        <DescriptionField control={form.control} />
        <TagsField
          control={form.control}
          tagsValue={folder.tags}
          setValue={form.setValue}
        />

        <Button type='submit' className='mt-4 ml-auto capitalize'>
          save changes <FileCheck />
        </Button>
      </form>
    </Form>
  )
}
