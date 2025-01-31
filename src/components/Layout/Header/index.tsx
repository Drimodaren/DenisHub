import { NavLinkButton } from '../../UI/NavLinkButton'

const Header = () => {
  return (
    <header className='h-16 flex justify-end items-center w-full border-b-4 p-2'>
      <div className='flex justify-between items-center w-1/4 '>
        <NavLinkButton to={''}>Movies</NavLinkButton>
        <NavLinkButton to={''}>Favorites</NavLinkButton>
        <NavLinkButton to={''}>My Page</NavLinkButton>
      </div>
    </header>
  )
}

export default Header
