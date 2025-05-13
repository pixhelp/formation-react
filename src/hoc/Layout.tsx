import { NavLink, Outlet } from 'react-router-dom';

const getActiveClass = ({ isActive }: { isActive: boolean }) => {
  return isActive ? 'text-green-600' : '';
}

const Layout = () => {
  return (
    <div>
      <nav>
        <ul className='flex justify-center gap-4 mb-4 text-2xl font-semibold bg-gray-200 p-4'>
          <li>
            <NavLink className={getActiveClass} to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className={getActiveClass} to="/heroes">Heroes</NavLink>
          </li>
        </ul>
      </nav>
      <main> 
        <Outlet />
      </main>
    </div>
  );
}
export default Layout;