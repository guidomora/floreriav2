import Link from 'next/link'
import React from 'react'
import { NavProps } from '../navItems';

const BurgerItems = ({ path, title }: NavProps) => {
    return (
        <Link href={path} className='text-2xl hover:text-violet-500'>
            <button>
                {title}
            </button>
        </Link>
    )
}

export default BurgerItems