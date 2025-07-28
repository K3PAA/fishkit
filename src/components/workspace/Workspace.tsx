import Header from '@/components/workspace/shared/Header'
import FoldersDisplay from './FoldersDisplay'
import { PlusIcon } from 'lucide-react'
import { Button } from '../ui/button'
import Search from './Search'
import Link from 'next/link'

export default function Workspace() {
  return (
    <section className='border-border/50'>
      <Header>
        <Search />
        <Button asChild>
          <Link href='/workspace/create'>
            Create new folder <PlusIcon className='h-4 w-4' />
          </Link>
        </Button>
      </Header>

      <FoldersDisplay />
    </section>
  )
}
