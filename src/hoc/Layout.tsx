import { NavLink, Outlet } from 'react-router-dom';
import { useAuthContext } from '../contexts/auth-context';

enum LinkVisibility {
  PUBLIC = 'PUBLIC',
  AUTH = 'AUTH',
  NOT_AUTH = 'NOT_AUTH'
}
type Link = {
  path: string,
  name: string,
  visbility: LinkVisibility
}

const getActiveClass = ({ isActive }: { isActive: boolean }) => {
  return isActive ? 'text-green-600' : '';
}


const Layout = () => {
  const {connected, logOutUser} = useAuthContext();

  const links = [
    {path: '/', name: 'Home', visbility: LinkVisibility.PUBLIC},
    {path: '/heroes', name: 'Heroes', visbility: LinkVisibility.PUBLIC},
    {path: '/login', name: 'Login', visbility: LinkVisibility.NOT_AUTH},
    {path: '/signup', name: 'Sign up', visbility: LinkVisibility.NOT_AUTH},
    {path: '/profile', name: 'Profile', visbility: LinkVisibility.AUTH},
    {path: '/logout', name: 'LogOut', visbility: LinkVisibility.AUTH},
    {path: '/battle', name: 'Battle', visbility: LinkVisibility.PUBLIC},
  ]
  return (
    <div>
      <nav>
        <ul className='flex justify-center gap-4 mb-4 text-2xl font-semibold bg-gray-200 p-4'>
          {links.filter((link) => {
            return (
              link.visbility === LinkVisibility.PUBLIC ||
              (link.visbility === LinkVisibility.AUTH && connected) ||
              (link.visbility === LinkVisibility.NOT_AUTH && !connected)
            )
          }).map((link) => (
            <li key={link.path}>
              <NavLink to={link.path} className={getActiveClass}>{link.name}</NavLink>
            </li>
          ))}
        </ul>
        <button onClick={logOutUser}>Logout</button>
      </nav>
      <main> 
        <Outlet />
      </main>
    </div>
    
  );
}
export default Layout;