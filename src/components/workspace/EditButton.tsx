import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Button } from '../ui/button'
import Link from 'next/link'

type EditButtonProps = {
  id: number
}

export default function EditButton({ id }: EditButtonProps) {
  return (
    <Button variant='secondary' asChild>
      <Link href={`/workspace/edit/${id}`}>Edit</Link>
    </Button>
  )
}
