import Header from '@/components/workspace/shared/Header'
import FoldersDisplay from './FoldersDisplay'
import { PlusIcon } from 'lucide-react'
import { Button } from '../ui/button'
import Search from './Search'

export default function Workspace() {
  return (
    <section className='border-border/50'>
      <Header>
        <Search />
        <Button>
          Create new folder <PlusIcon className='h-4 w-4' />
        </Button>
      </Header>

      <FoldersDisplay />
    </section>
  )
}
