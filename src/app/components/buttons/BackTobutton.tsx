'use client'

import { useRouter } from 'next/navigation';
import React from 'react'

const BackTobutton = () => {
    const router = useRouter();
    const handleBack = () => {
        router.back();
    };
    return (
        <div className='flex justify-center lg:justify-start lg:ml-[5vw]'>
            <button onClick={handleBack} className='border-2 border-violet-300 py-2 rounded-2xl w-52'>Página anterior</button>
        </div>
    )
}

export default BackTobutton