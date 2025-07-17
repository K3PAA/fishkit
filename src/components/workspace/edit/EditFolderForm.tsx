'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { Folder, FolderSchemaT } from '@/lib/types'
import { folderFormSchema } from '@/lib/validation/folder/edit-folder'
import DescriptionField from './folder/DescriptionField'
import TagsField from './folder/TagsField'
import TitleField from './folder/TitleField'
import PrivateField from './folder/VisibilityField'
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
      <form action={() => {}}>
        <section className='mt-4 grid gap-4 md:grid-cols-2'>
          <div className='flex flex-col gap-4'>
            <TitleField control={form.control} />
            <TagsField
              control={form.control}
              tagsValue={folder.tags}
              setValue={form.setValue}
            />
          </div>
          <div className='flex h-full w-full flex-col gap-4'>
            <DescriptionField control={form.control} />
            <PrivateField control={form.control} />
          </div>
        </section>

        <Button type='submit' className='mt-4 capitalize'>
          save changes <FileCheck />
        </Button>
      </form>
    </Form>
  )
}
