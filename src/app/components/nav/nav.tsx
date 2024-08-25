'use client'

import NavItems from "./navItems"
import BurgerMenu from "./BurgerMenu/BurgerMenu"
import { useEffect, useState } from "react"

export const menuItems = [
  { title: 'Inicio', path: '/' },
  { title: 'Ramos', path: '/categoria/Ramo' },
  { title: 'Cajas', path: '/categoria/Caja' },
  { title: 'Condolencias', path: '/categoria/Condolencias' },
  { title: 'Arreglos a medida', path: '/categoria/Arreglo' },
]

const Nav = () => {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])
  


  return (
    <>
      {(windowWidth >= 768 || windowWidth == 0) ? <div className='h-[5vh] w-[100vw] bg-transparent backdrop-blur-md flex items-center justify-center z-20 fixed border-b  border-violet-400'>
        {menuItems.map(({ title, path }) =>
          <NavItems key={title} title={title} path={path} />
        )}
      </div> :
        <BurgerMenu />}
    </>


  )
}

export default Nav