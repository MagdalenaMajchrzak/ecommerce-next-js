import React from 'react'
import { Button } from '../ui/button'

const AddToCart = ({ productId }: { productId: string }) => {
  return (
    <Button className="capitalize mt-8" size="lg" type="submit">
      add to cart
    </Button>
  )
}

export default AddToCart
