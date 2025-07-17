import Sidebar from '@/components/workspace/Sidebar'
import Workspace from '@/components/workspace/Workspace'

export default function page() {
  return (
    <>
      <Workspace />
      <Sidebar title='Filters & Sorting'>
        <p>Filters</p>
        <p>Sorting</p>
      </Sidebar>
    </>
  )
}
