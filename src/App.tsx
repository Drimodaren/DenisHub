import { route } from './pages'
import { RouterProvider } from 'react-router-dom'

function App() {
  return (
    <div className='w-container mx-auto h-full'>
      <RouterProvider router={route} />
    </div>
  )
}

export default App
