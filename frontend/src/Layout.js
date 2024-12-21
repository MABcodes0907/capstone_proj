import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
function Layout() {
  return (
    <div className='layout'>
      <Outlet />
      <Header />
      <Footer />
    </div>
  );
}

export default Layout;
