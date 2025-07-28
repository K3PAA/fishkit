import { Button } from '@/components/ui/button'
import CardsDisplay from '@/components/workspace/subpages/CardsDisplay'
import EditFolderForm from '@/components/workspace/subpages/FolderForm'
import Header from '@/components/workspace/shared/Header'
import Sidebar from '@/components/workspace/Sidebar'
import Link from 'next/link'
import React from 'react'
import FolderForm from '@/components/workspace/subpages/FolderForm'

export default function page() {
  return (
    <>
      <section>
        <Header>
          <h1 className='text-2xl font-medium'>Create new lesson</h1>

          <Button variant='secondary' asChild>
            <Link href={`/workspace`}>Back to workspace</Link>
          </Button>
        </Header>
        <main className='grid gap-8 px-4'>
          <FolderForm role='create' />
        </main>
      </section>

      <Sidebar title='Edit Folder'>
        <p>TODO Subscription Information, info about max lessons / card</p>
      </Sidebar>
    </>
  )
}
