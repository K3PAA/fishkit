import { PlusIcon } from 'lucide-react'
import { Accordion as AccordionPrimitive } from 'radix-ui'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from '@/components/ui/accordion'

import FavoriteButton from '../shared/FavoriteButton'
import CardsPreview from './CardsPreview'
import { Button } from '../ui/button'
import EditButton from './EditButton'

export default function FoldersDisplay() {
  return <div>FoldersDisplay</div>
  return (
    <main>
      <Accordion
        type='single'
        collapsible
        className='w-full border-b'
        defaultValue={mockData[0].id.toString()}
      >
        {mockData.map((item) => (
          <AccordionItem value={item.id.toString()} key={item.id} className=''>
            <AccordionPrimitive.Header className='flex items-center'>
              <AccordionPrimitive.Trigger className='focus-visible:border-ring focus-visible:ring-ring/50 hover:bg-primary/10 flex flex-1 cursor-pointer items-center gap-4 rounded-md p-4 leading-6 transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&>svg]:-order-1 [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0'>
                <p className='text-md font-semibold'>{item.title}</p>
                <p className='text-muted-foreground text-sm'>
                  Total number of cards: {item.cards.length}
                </p>
                <PlusIcon
                  size={16}
                  className='pointer-events-none shrink-0 opacity-60 transition-transform duration-200'
                  aria-hidden='true'
                />
              </AccordionPrimitive.Trigger>
              <div className='ml-auto flex items-center gap-2 p-4'>
                <FavoriteButton favorite={item.isFavorite} />
              </div>
            </AccordionPrimitive.Header>
            <AccordionContent className='text-muted-foreground px-7 pb-4'>
              <p className='text-muted-foreground text-sm'>
                {item.description}
              </p>
              <CardsPreview cards={item.cards} title='Words Preview' />

              <section className='mt-4 flex items-center justify-between gap-2'>
                <p>Author: {item.author}</p>
                <div className='flex gap-2'>
                  {item.author === 'jacob' ? (
                    <>
                      <Button variant='destructive'>Delete</Button>
                      <EditButton id={item.id} />
                    </>
                  ) : (
                    <Button variant='destructive'>Remove from workspace</Button>
                  )}

                  <Button>Start Lesson</Button>
                </div>
              </section>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </main>
  )
}
