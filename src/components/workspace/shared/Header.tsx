type HeaderProps = {
  children: React.ReactNode
}

export default function Header({ children }: HeaderProps) {
  return (
    <header className='h-workspace-header-height grid grid-cols-[1fr_auto] items-center gap-4 border-b px-4'>
      {children}
    </header>
  )
}
