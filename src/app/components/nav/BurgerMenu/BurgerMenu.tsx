'use client'

import { useState } from "react"
import { CiMenuBurger } from "react-icons/ci"
import { TfiClose } from "react-icons/tfi"
import { menuItems } from '../nav';
import BurgerItems from "./BurgerItems";


const BurgerMenu = () => {
    const [menu, setMenu] = useState(false)

    const toggleMenu = (): void => {
        setMenu(!menu)
    }
    return (
        <>
            <div className='pl-2 h-[7vh] w-[100vw] bg-transparent backdrop-blur-md flex items-center justify-start z-20 fixed border-b  border-violet-400'>
                <button onClick={toggleMenu}>
                    <CiMenuBurger className={`cursor-pointer text-violet-500 ${menu ? 'hidden' : 'inline'}`} size={'2rem'} />
                </button>
            </div>
            <div className={`p-2 flex justify-between border-t-2 border-r-2 border-b-2 border-violet-500 z-20 fixed top-0 left-0 h-[100vh] w-[100vw] backdrop-blur-md transform transition-transform duration-300 ease-in-out ${menu ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex flex-col gap-y-2">
                    {menuItems.map(({ title, path }) =>
                        <BurgerItems onclick={toggleMenu} key={title} title={title} path={path} />
                    )}
                </div>
                <TfiClose onClick={toggleMenu} className="cursor-pointer text-violet-500 mr-2 mt-2" size={'2rem'} />
            </div>
        </>

    )
}

export default BurgerMenu