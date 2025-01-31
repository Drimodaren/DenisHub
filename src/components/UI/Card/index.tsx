import { NavLink } from 'react-router-dom'

export const Card = () => {
  return (
    <NavLink to={''}>
      <img src='src/image/DenAndAndrew.jpeg' alt='imageCard' />
      <h1>title</h1>
      <h2>description</h2>
      <h2>year</h2>
    </NavLink>
  )
}
