'use client'

import { useState } from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

type FavoriteButtonProps = {
  favorite: boolean
}

export default function FavoriteButton({ favorite }: FavoriteButtonProps) {
  const [isFavorite, setIsFavorite] = useState(favorite)
  const handleFavoriteButtonClick = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.stopPropagation()
    setIsFavorite(!isFavorite)
  }

  return (
    <Button
      variant='ghost'
      size='icon'
      onClick={(e) => handleFavoriteButtonClick(e)}
    >
      {isFavorite ? (
        <Image
          src='star-full.svg'
          width={24}
          height={24}
          alt='Star filled icon'
        />
      ) : (
        <Image
          src='star-empty.svg'
          width={24}
          height={24}
          alt='Star filled icon'
        />
      )}
    </Button>
  )
}
