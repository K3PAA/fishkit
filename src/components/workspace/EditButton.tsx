import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Button } from '../ui/button'
import Link from 'next/link'

type EditButtonProps = {
  isAuthor: boolean
  id: number
}

export default function EditButton({ isAuthor, id }: EditButtonProps) {
  if (isAuthor) {
    return (
      <Button variant='secondary' asChild>
        <Link href={`/workspace/edit/${id}`}>Edit</Link>
      </Button>
    )
  }

  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant='secondary'
            aria-disabled='true'
            tabIndex={-1}
            className='opacity-50'
          >
            <p>Edit</p>
          </Button>
        </TooltipTrigger>
        <TooltipContent className='px-2 py-1 text-xs'>
          You are not the author of this folder
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
