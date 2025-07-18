import Filters from '@/components/workspace/sidebar/Filters'
import Sidebar from '@/components/workspace/Sidebar'
import Workspace from '@/components/workspace/Workspace'
import Sorting from '@/components/workspace/sidebar/Sorting'

export default function page() {
  return (
    <>
      <Workspace />
      <Sidebar title='Filters & Sorting'>
        <Sorting />
        <Filters />
      </Sidebar>
    </>
  )
}
