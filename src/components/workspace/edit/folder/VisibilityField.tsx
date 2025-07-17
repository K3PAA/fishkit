import { useId } from 'react'

import { Checkbox } from '@/components/ui/checkbox'

import {
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { FolderSchemaT } from '@/lib/types'
import { Control } from 'react-hook-form'

type Props = {
  control: Control<FolderSchemaT>
}

export default function VisibilityField({ control }: Props) {
  const id = useId()
  return (
    <FormField
      control={control}
      name='visibility'
      render={({ field }) => (
        <FormItem>
          <FormLabel>Visiblity of lesson</FormLabel>
          <FormControl>
            <Select value={field.value} onValueChange={field.onChange} required>
              <SelectTrigger id={id} className='w-full'>
                <SelectValue placeholder='Select visibility' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='public'>Public</SelectItem>
                <SelectItem value='private'>Private</SelectItem>
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
