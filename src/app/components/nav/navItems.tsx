'use client'

import Link from 'next/link'
import React from 'react'

interface Props {
    title: string
    path: string
}

const NavItems = ({ title, path }: Props) => {
    return (
        <Link href={path} className='text-violet-500'>
            <button className='py-2 px-6 mx-4 rounded-xl hover:bg-violet-300 transition border-violet-500'>
                {title}
            </button>
        </Link>
    )
}

export default NavItems