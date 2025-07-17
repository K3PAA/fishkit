import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { FolderSchemaT } from '@/lib/types'
import { Control } from 'react-hook-form'

type Props = { control: Control<FolderSchemaT> }

const TitleField = ({ control }: Props) => (
  <FormField
    control={control}
    name='title'
    render={({ field }) => (
      <FormItem>
        <FormLabel>Folder Title</FormLabel>

        <FormControl>
          <Input placeholder='Folder title' {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
)

export default TitleField
