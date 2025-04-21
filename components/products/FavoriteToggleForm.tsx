import React, { useState } from 'react'

interface FavoriteToggleFormProps {
  isFavorite: boolean
  onToggle: (isFavorite: boolean) => void
}

const FavoriteToggleForm: React.FC<FavoriteToggleFormProps> = ({
  isFavorite,
  onToggle,
}) => {
  const [favorite, setFavourite] = useState(isFavorite)

  const handleToggle = () => {
    const newFavoriteStatus = !favorite
    setFavourite(newFavoriteStatus)
    onToggle(newFavoriteStatus)
  }

  return (
    <button onClick={handleToggle}>
      {favorite ? 'Remove from Favourites' : 'Add to Favourites'}
    </button>
  )
}

export default FavoriteToggleForm
