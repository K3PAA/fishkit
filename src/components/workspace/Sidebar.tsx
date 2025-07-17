type SidebarProps = {
  title: string
  children: React.ReactNode
}

export default function Sidebar({ title, children }: SidebarProps) {
  return (
    <aside className='border-l'>
      <section className='h-workspace-header-height flex items-center px-4'>
        <h3 className='text-lg font-medium'>{title}</h3>
      </section>
      <section className='p-4'>{children}</section>
    </aside>
  )
}
