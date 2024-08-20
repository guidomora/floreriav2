'use client'

import NavItems from "./navItems"
import BurgerMenu from "./BurgerMenu/BurgerMenu"
import { useEffect, useState } from "react"

export const menuItems = [
  { title: 'Ramos', path: '/ramos' },
  { title: 'Cajas', path: '/ramos' },
  { title: 'Condolencias', path: '/ramos' },
  { title: 'Otros...', path: '/' },
]

const Nav = () => {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
  }, [])
  


  return (
    <>
      {windowWidth >= 768 ? <div className='h-[5vh] w-[100vw] bg-transparent backdrop-blur-md flex items-center justify-center z-20 fixed border-b  border-violet-400'>
        {menuItems.map(({ title, path }) =>
          <NavItems key={title} title={title} path={path} />
        )}
      </div> :
        <BurgerMenu />}
    </>


  )
}

export default Nav