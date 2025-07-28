'use client'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from '@kinde-oss/kinde-auth-nextjs/components'

export default function AuthButtons() {
  const { isAuthenticated, isLoading } = useKindeBrowserClient()

  if (isLoading)
    return (
      <>
        <Skeleton className='h-10 w-20' />
        <Skeleton className='h-10 w-20' />
      </>
    )

  if (isAuthenticated) {
    return (
      <>
        <Button asChild variant='secondary'>
          <LogoutLink>Sign out</LogoutLink>
        </Button>
      </>
    )
  }

  return (
    <>
      <Button asChild variant='secondary'>
        <LoginLink>Sign in</LoginLink>
      </Button>
      <Button asChild variant='outline'>
        <RegisterLink>Sign up</RegisterLink>
      </Button>
    </>
  )
}
