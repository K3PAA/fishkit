import { mockData } from '@/lib/mock-data'
import { CardT } from '@/lib/types'
import CardForm from './CardForm'
import { Button } from '@/components/ui/button'
import { PlusIcon } from 'lucide-react'

export default function CardsDisplay() {
  return (
    <section className='grid gap-4'>
      <div className='flex items-center justify-between'>
        <h3 className='text-3xl font-bold'>Update card values</h3>
        <Button variant='secondary'>
          Create new card <PlusIcon className='ml-2 h-4 w-4' />
        </Button>
      </div>
      {mockData[0].cards.map((card: CardT) => (
        <CardForm key={card.id} card={card} />
      ))}
    </section>
  )
}
