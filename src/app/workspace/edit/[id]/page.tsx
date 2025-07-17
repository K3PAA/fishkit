import Sidebar from '@/components/workspace/Sidebar'
import { mockData } from '@/lib/mock-data'
import EditFolderForm from '@/components/workspace/edit/EditFolderForm'
import Header from '@/components/workspace/shared/Header'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function page({ params }: { params: { id: string } }) {
  const folder = mockData.find((folder) => folder.id === Number(params.id))

  if (!folder) return <main>No folder found</main>

  return (
    <>
      <section>
        <Header>
          <h1 className='text-2xl font-medium'>Edit lesson content</h1>
          <div className='flex gap-2'>
            <Button className='' variant='destructive'>
              Delete lesson
            </Button>
            <Button variant='secondary' asChild>
              <Link href={`/workspace`}>Back to workspace</Link>
            </Button>
          </div>
        </Header>
        <main className='px-4'>
          <EditFolderForm folder={folder} />
        </main>
      </section>

      <Sidebar title='Edit Folder'>
        <p>Edit Folder</p>
      </Sidebar>
    </>
  )
}
