import Link from 'next/link'
import ProfileAvatar from '@/components/shared/ProfileAvatar'
import Wrapper from '@/components/shared/Wrapper'
import Theme from './Theme'
import AuthButtons from './auth/AuthButtons'
import NavLinkItem from './NavLinkItem'

const navItems = [
  {
    label: 'Explore',
    href: '/explore',
    requiresAuth: false,
  },
  {
    label: 'Workspace',
    href: '/workspace',
    requiresAuth: false,
  },
  {
    label: 'Profile',
    href: '/profile',
    requiresAuth: true,
  },
]

export default function Header() {
  return (
    <Wrapper
      as='header'
      className='grid grid-cols-[1fr_300px] border-x border-b'
    >
      <nav className=''>
        <Link href='/'></Link>
        <ul className='flex items-center gap-4'>
          {navItems.map((item) => (
            <li key={item.href} className='h-nav-height'>
              <NavLinkItem it={item.label} {...item} />
            </li>
          ))}
        </ul>
      </nav>

      <section className='flex items-center justify-end gap-2 px-4'>
        <AuthButtons />
        <Theme />
      </section>
    </Wrapper>
  )
}
