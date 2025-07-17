import Wrapper from '@/components/shared/Wrapper'

type LayoutProps = { children: React.ReactNode }

export default function layout({ children }: LayoutProps) {
  return (
    <Wrapper
      as='section'
      className='grid min-h-[calc(100vh-var(--nav-height)-1px)] grid-cols-[1fr_300px] border-x'
    >
      {children}
    </Wrapper>
  )
}
