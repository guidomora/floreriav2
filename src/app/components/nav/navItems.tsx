'use client'

import Link from 'next/link'
import React from 'react'

export interface NavProps {
    title: string
    path: string
    onclick?: () => void
}

const NavItems = ({ title, path }: NavProps) => {
    return (
        <Link href={path} className='py-2 px-6 mx-4 rounded-xl text-black hover:border border-violet-500 '>
            <button >
                {title}
            </button>
        </Link>
    )
}

export default NavItems