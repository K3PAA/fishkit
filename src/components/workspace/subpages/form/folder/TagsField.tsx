import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { FolderSchemaT } from '@/lib/types'
import { Tag, TagInput } from 'emblor'
import { useState } from 'react'
import { Control, UseFormSetValue } from 'react-hook-form'

type Props = {
  control: Control<FolderSchemaT>
  tags: Tag[]
  setTags: (tags: Tag[]) => void
  setValue: UseFormSetValue<FolderSchemaT>
}

export default function TagsField({ control, tags, setTags, setValue }: Props) {
  const [activeTagIndex, setActiveTagIndex] = useState<number | null>(null)

  return (
    <div className='*:not-first:mt-2'>
      <FormField
        control={control}
        name='tags'
        render={({ field }) => (
          <FormItem className=''>
            <FormLabel className='mt-2 text-left'>Specify Tags</FormLabel>
            <FormDescription>
              Tags should describe what your lesson is about. ( e.g. cooking
              vocabulary )
            </FormDescription>
            <FormControl>
              <TagInput
                {...field}
                tags={tags}
                placeholder='Add new tag'
                styleClasses={{
                  tagList: {
                    container: 'w-full flex flex-wrap gap-1 ',
                  },
                  input:
                    'w-full rounded-md transition-[color,box-shadow] placeholder:text-muted-foreground/70 focus-visible:border-ring outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 dark:bg-input/30 min-w-[300px]',
                  tag: {
                    body: 'text-foreground relative h-7 bg-background border border-input hover:bg-background rounded-md font-medium text-xs ps-2 pe-7 mb-1 dark:bg-input/30',
                    closeButton:
                      'absolute -inset-y-px -end-px p-0 rounded-s-none rounded-e-md flex size-7 transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] text-muted-foreground/80 hover:text-foreground cursor-pointer',
                  },
                }}
                setTags={(newTags) => {
                  setTags(newTags as Tag[])
                }}
                activeTagIndex={activeTagIndex}
                setActiveTagIndex={setActiveTagIndex}
                inlineTags={true}
                inputFieldPosition='bottom'
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}
