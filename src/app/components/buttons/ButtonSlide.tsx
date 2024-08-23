'use client'

import React from 'react'
import { BsArrowDown } from 'react-icons/bs'

const ButtonSlide = () => {

    const scrollToBest = () => {
        const contactoSection = document.getElementById('best');
        if (contactoSection) {
          contactoSection.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return (
        <button
            onClick={scrollToBest}
            className="flex items-center font-thin font-goodSans bg-violet-400 
                text-lg md:text-2xl border-2 border-violet-400 p-4
                 transition hover:shadow-violet-900/90 hover:shadow-xl">
            Productos más vendidos <BsArrowDown className='ml-3 bounce-small' />
        </button>
    )
}

export default ButtonSlide