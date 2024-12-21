import { useContext } from "react";
import { Link } from "react-router-dom";
import { AdminContext } from "./AdminContext";

function Header() {
  const {admin} = useContext(AdminContext);

  return (
    <header>
        <Link to={"/admin"} className="title">DASHBOARD</Link>
        <div className="nav">
            <Link to={"/dashboard"} className="nav-button">DASHBOARD</Link>
            <Link to={"/booking"} className="nav-button">BOOKING</Link>
        </div>
        <Link to={admin?'/adminaccount':'/adminlogin'}>
          <div className="login-button">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="acc-logo">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
              {!!admin && (
                <div className="acc-name">
                  {admin.firstname}
                </div>
              )}
          </div>
          
        </Link>
    </header>
  );
}

export default Header;
