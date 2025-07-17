import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'
import { FolderSchemaT } from '@/lib/types'
import { Control } from 'react-hook-form'

type Props = { control: Control<FolderSchemaT> }

const DescriptionField = ({ control }: Props) => (
  <FormField
    control={control}
    name='description'
    render={({ field }) => (
      <FormItem>
        <FormLabel>Description</FormLabel>
        <FormControl>
          <Textarea
            placeholder='Folder description'
            {...field}
            className='flex-1'
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
)

export default DescriptionField
