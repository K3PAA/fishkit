'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { Folder, FolderSchemaT } from '@/lib/types'
import { folderFormSchema } from '@/lib/validation/folder/folder'
import DescriptionField from './form/folder/DescriptionField'
import TagsField from './form/folder/TagsField'
import TitleField from './form/folder/TitleField'
import PrivateField from './form/folder/VisibilityField'
import { FileCheck } from 'lucide-react'
import { useState } from 'react'
import { Tag } from 'emblor'
import { createLessonAction } from '@/actions/actions'

type FolderFormProps = {
  role: 'create' | 'edit'
  folder?: Omit<Folder, 'tags'> & { tags: string[] }
}

export default function FolderForm({ role, folder }: FolderFormProps) {
  const [tags, setTags] = useState<Tag[]>(
    folder?.tags.map((tag, index) => ({ id: index.toString(), text: tag })) ||
      [],
  )
  const [visibility, setVisibility] = useState<'public' | 'private'>(
    folder?.visibility || 'public',
  )

  const form = useForm<FolderSchemaT>({
    resolver: zodResolver(folderFormSchema),
    mode: 'onSubmit',
    defaultValues: {
      title: folder?.title || '',
      description: folder?.description || '',
      visibility,
      tags: tags.map((tag) => tag.text),
    },
  })
  const { setValue } = form // somehow this is not working, for both tags and visibility

  return (
    <Form {...form}>
      <form
        action={async (formData) => {
          formData.append('tags', tags.map((tag) => tag.text).join(' '))
          formData.append('visibility', visibility)

          const res = await createLessonAction(formData)
        }}
        className='mt-4 grid gap-4'
      >
        <div className='grid gap-4 md:grid-cols-2'>
          <TitleField control={form.control} />
          <PrivateField
            control={form.control}
            setVisibility={setVisibility}
            visibility={visibility}
            setValue={setValue}
          />
        </div>

        <DescriptionField control={form.control} />
        <TagsField
          control={form.control}
          tags={tags}
          setTags={setTags}
          setValue={setValue}
        />

        <Button type='submit' className='mt-4 ml-auto capitalize'>
          save changes <FileCheck />
        </Button>
      </form>
    </Form>
  )
}
