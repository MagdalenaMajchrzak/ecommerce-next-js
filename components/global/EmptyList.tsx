import React from 'react'
import { cn } from '@/lib/utils'

interface EmptyListProps {
  heading?: string
  className?: string
}

const EmptyList: React.FC<EmptyListProps> = ({ heading, className }) => {
  return (
    <h2 className={cn('text-xl', className)}>{heading || 'No items found.'}</h2>
  )
}

export default EmptyList
