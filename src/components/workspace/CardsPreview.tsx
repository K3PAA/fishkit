import { Card } from '@/lib/types'
import React from 'react'
import { cn } from '@/lib/utils'

type CardsPreviewProps = {
  cards: Card[]
  title: string
  maxCards?: number
}

export default function CardsPreview({
  cards,
  title,
  maxCards = 11,
}: CardsPreviewProps) {
  return (
    <section className='border-border/20 mt-4 border p-4'>
      <p className='flex flex-col text-lg font-bold sm:flex-row sm:items-center sm:gap-2'>
        {title}
        {cards.length > maxCards && (
          <span className='text-muted-foreground/50 text-sm'>
            and {cards.length - maxCards} more
          </span>
        )}
      </p>
      <div
        className='grid-even mt-4 grid gap-0.5'
        style={{ '--size': '120px' } as React.CSSProperties}
      >
        {cards.map((card, i) => {
          if (i > maxCards) return null
          return (
            <p
              key={`${card.id}-${i}`}
              className={cn(
                'text-md bg-primary/10 dark:bg-primary/100 p-2 text-center dark:text-white',
              )}
            >
              {card.front.title.slice(0, 13)}
              {card.front.title.length > 13 && '...'}
            </p>
          )
        })}
      </div>
    </section>
  )
}
