'use client'

import Link from 'next/link'
import React from 'react'

interface Props {
    title: string
    path: string
}

const NavItems = ({ title, path }: Props) => {
    return (
        <Link href={path} className=' py-2 px-6 mx-4 rounded-xl text-black hover:border border-violet-500 '>
            <button>
                {title}
            </button>
        </Link>
    )
}

export default NavItems