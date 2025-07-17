import Link from 'next/link'
import ProfileAvatar from '@/components/shared/ProfileAvatar'
import Wrapper from '@/components/shared/Wrapper'
import Theme from './Theme'

const navItems = [
  {
    label: 'Explore',
    href: '/explore',
  },
  {
    label: 'Workspace',
    href: '/workspace',
  },
]

export default function Header() {
  return (
    <Wrapper
      as='header'
      className='grid grid-cols-[1fr_300px] border-x border-b'
    >
      <nav className=''>
        <ul className='flex items-center gap-4'>
          {navItems.map((item) => (
            <li key={item.href} className='h-nav-height'>
              <Link href={item.href} className='block h-full px-4 text-lg'>
                <span className='grid h-full place-content-center'>
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <section className='flex items-center justify-end gap-2 px-4'>
        <p className='text-lg font-bold'>Jacob</p>
        <ProfileAvatar />
        <Theme />
      </section>
    </Wrapper>
  )
}
