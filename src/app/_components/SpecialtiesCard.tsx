import React from 'react'

interface cardData{
    title: string,
    description: string
}

export default function SpecialtiesCard({title, description}: cardData) {
  return (
    <div className='w-[313px] p-4 bg-[#F6DC0E] rounded-2xl mx-auto gap-8'>
      <h2 className='font-hind text-secondary_text font-bold text-2xl'>{title}</h2>
      <p className='text-paragraph_text font-normal text-xl font-hind mt-3'>{description}</p>
    </div>
  )
}
