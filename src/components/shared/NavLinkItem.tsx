'use client'
import { cn } from '@/lib/utils'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavLinkItemProps = {
  label: string
  href: string
  requiresAuth: boolean
}

export default function NavLinkItem({
  label,
  href,
  requiresAuth,
}: NavLinkItemProps) {
  const pathname = usePathname()
  const { isAuthenticated } = useKindeBrowserClient()

  if (requiresAuth && !isAuthenticated) {
    return null
  }

  return (
    <Link
      href={href}
      className={cn('block h-full px-4 text-lg', {
        'font-bold': pathname.includes(href),
      })}
    >
      <span className='grid h-full place-content-center'>{label}</span>
    </Link>
  )
}
