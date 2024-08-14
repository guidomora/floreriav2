import NavItems from "./navItems"

const menuItems = [
  {title: 'Ramos', path:'/ramos'},
  {title: 'Cajas', path:'/ramos'},
  {title: 'Condolencias', path:'/ramos'},
  {title: 'Otros...', path:'/'},
]

const Nav = () => {
  return (
    <div className='h-[5vh] w-[100vw] bg-transparent backdrop-blur-md flex items-center justify-center z-20 fixed border-b border-t border-violet-400'>
      {menuItems.map(({title, path}) => 
        <NavItems key={title} title={title} path={path} />
      )}
    </div>
  )
}

export default Nav