import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Skeleton } from '@/components/ui/skeleton'

export default function ProfileAvatar() {
  return (
    <Avatar>
      <AvatarImage src='https://github.com/shadcn.png' />
      <AvatarFallback>
        <Skeleton className='h-12 w-12 rounded-full' />
      </AvatarFallback>
    </Avatar>
  )
}
