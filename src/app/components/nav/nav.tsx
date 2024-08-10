import NavItems from "./navItems"

const menuItems = [
  {title: 'Ramos', path:'/ramos'},
  {title: 'Cajas', path:'/ramos'},
  {title: 'Condolencias', path:'/ramos'},
  {title: 'Otros...', path:'/ramos'},
]

const Nav = () => {
  return (
    <div className='h-[5vh] w-[100vw] bg-custom-violet flex items-center justify-center z-10 fixed'>
      {menuItems.map(({title, path}) => 
        <NavItems title={title} path={path} />
      )}
    </div>
  )
}

export default Nav