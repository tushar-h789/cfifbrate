import React from 'react';
import Image, { StaticImageData } from 'next/image';
import RightArrow from '../../../../public/icons/right-arrow';

interface CardData {
  image: StaticImageData;  // Change from string to StaticImageData
  title: string;
  description: string;
  button: string;
}

export default function Card({ image, title, description, button }: CardData) {
  return (
    <div className="w-[337px] font-hind mx-auto">
      {/* Image Section (No rounding at bottom) */}
      <div className="overflow-hidden rounded-t-xl">
        <Image src={image} width={337} height={200} alt="card image" className="object-cover" />
      </div>

      {/* Content Section (Rounded bottom corners only) */}
      <div className="bg-white p-5 rounded-b-xl">
        <h2 className="text-2xl font-semibold my-6">{title}</h2>
        <p className="font-normal text-base text-paragraph_text">{description}</p>

        <div className="flex items-center gap-2 mt-6">
          <p className="text-paragraph_text border-b border-paragraph_text cursor-pointer hover:text-primary_bg">
            {button}
          </p>
          <RightArrow className="w-6 h-6 text-paragraph_text" />
        </div>
      </div>
    </div>
  );
}
