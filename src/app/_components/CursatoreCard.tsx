import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface cardData{
    image: StaticImageData,
    title: string,
    description: string
}

export default function CursatoreCard({image, title, description}: cardData) {
  return (
    <div className='w-[337px] mx-auto'>
      <Image src={image} width={300} alt='curators' className='bg-secondary_bg rounded-2xl'/>
      <h2 className='font-semibold text-secondary_text text-2xl font-hind mt-4'>{title}</h2>
      <p className='text-paragraph_text font-medium text-base mt-4'>{description}</p>
    </div>
  )
}
