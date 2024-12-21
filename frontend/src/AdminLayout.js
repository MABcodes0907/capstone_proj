import { Outlet } from 'react-router-dom';
import AdminHeader from './AdminHeader';
function Layout() {
  return (
    <div className='layout'>
      <Outlet />
      <AdminHeader />
    </div>
  );
}

export default Layout;
