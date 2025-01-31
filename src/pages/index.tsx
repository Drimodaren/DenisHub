import Layout from '../components/Layout'
import { createHashRouter } from 'react-router-dom'
import { MainPage } from './MainPage'

export const route = createHashRouter([
  { element: <Layout />, children: [{ path: '/', element: <MainPage /> }] },
])
