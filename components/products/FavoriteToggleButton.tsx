import React from 'react'
import { FaHeart } from 'react-icons/fa'
import { Button } from '@/components/ui/button'

interface FavoriteToggleButtonProps {
  productId: string
}

const FavoriteToggleButton: React.FC<FavoriteToggleButtonProps> = ({
  productId,
}) => {
  return (
    <Button
      size="icon"
      variant="outline"
      className="p-2 cursor-pointer"
      aria-label="Toggle Favourite"
    >
      <FaHeart />
    </Button>
  )
}

export default FavoriteToggleButton
