import React from 'react'
import { Separator } from '@/components/ui/separator'

interface SectionTitleProps {
  text: string
}

const SectionTitle: React.FC<SectionTitleProps> = ({ text }) => {
  return (
    <div>
      <h2 className="text-3xl font-medium tracking-wider capitalize mb-8">
        {text}
      </h2>
      <Separator className="mb-5" />
    </div>
  )
}

export default SectionTitle
