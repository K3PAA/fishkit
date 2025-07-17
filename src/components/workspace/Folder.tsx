'use client'

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import type { Folder } from '@/lib/types'
import FavoriteButton from '../shared/FavoriteButton'

type FolderProps = {
  folder: Folder
}

export default function Folder({ folder }: FolderProps) {
  return (
    <AccordionItem className='' value={folder.id.toString()}>
      <AccordionTrigger>
        <h3>{folder.title}</h3>

        <div className='flex items-center gap-2'></div>
        <FavoriteButton favorite={folder.isFavorite} />
      </AccordionTrigger>

      <AccordionContent>
        <p>Hello</p>
      </AccordionContent>
    </AccordionItem>
  )
}
