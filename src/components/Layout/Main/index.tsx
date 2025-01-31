import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <main className='justify-center items-center'>
      <Outlet />
    </main>
  )
}

export default Main
