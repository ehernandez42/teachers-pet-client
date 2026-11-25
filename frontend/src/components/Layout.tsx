import { NavLink, Outlet } from 'react-router-dom'

export function Layout() {
  return (
    <div>
      <nav>
        <NavLink to="/styles">Styles</NavLink>
        {' '}
        <NavLink to="/generate">Generate</NavLink>
        {' '}
        <NavLink to="/translate">Translate</NavLink>
        {' '}
        <NavLink to="/landing">About</NavLink>
        {' '}
        <NavLink to="/login">Sign in</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
