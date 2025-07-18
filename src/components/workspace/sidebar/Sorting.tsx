import { useId } from 'react'

import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export default function Sorting() {
  const id = useId()
  return (
    <div className='*:not-first:mt-2'>
      <Label htmlFor={id}>How should we sort your lessons ?</Label>
      <Select defaultValue='1'>
        <SelectTrigger id={id} className='w-full'>
          <SelectValue placeholder='Select framework' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='1'>Most recently taken</SelectItem>
          <SelectItem value='2'>Least recently taken</SelectItem>
          <SelectItem value='3'>Most amount of cards</SelectItem>
          <SelectItem value='4'>Least amount of cards</SelectItem>
          <SelectItem value='5'>Highest score</SelectItem>
          <SelectItem value='6'>Lowest score</SelectItem>
          <SelectItem value='7'>Most Popular</SelectItem>
          <SelectItem value='8'>Least Popular</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
