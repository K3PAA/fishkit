'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Folder, FolderSchemaT } from '@/lib/types'
import { Form } from '@/components/ui/form'
import { folderFormSchema } from '@/lib/validation/folder/edit-folder'
import TitleField from './field/TitleField'
import { Button } from '@/components/ui/button'
import DescriptionField from './field/DescriptionField'

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
    },
  })

  return (
    <Form {...form}>
      <form action={() => {}} className='mt-4 grid grid-cols-2 gap-4'>
        <section>
          <TitleField control={form.control} />
        </section>
        <DescriptionField control={form.control} />
        <Button type='submit'>Save</Button>
      </form>
    </Form>
  )
}
