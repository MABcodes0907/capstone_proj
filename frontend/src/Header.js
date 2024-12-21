import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

function Header() {
  const {user} = useContext(UserContext);

  return (
    <header>
        <Link to={"/"} className="title">MEGAY BEACH RESORT</Link>
        <div className="nav">
            <Link to={"/"} className="nav-button">HOME</Link>
            <Link to={"/about"} className="nav-button">ABOUT</Link>
            <Link to={"/service"} className="nav-button">SERVICE</Link>
            <Link to={"/contact"} className="nav-button">CONTACT</Link>
            <a className="nav-button" href="https://weather.com/weather/tenday/l/ec60b3596ad5745fbc7fc26816fce9c244ef4a5b01b09e940548a30e8ab1f298" target="_blank">WEATHER</a>
        </div>
        <Link to={user?'/account':'/login'}>
          <div className="login-button">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="acc-logo">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
              {!!user && (
                <div className="acc-name">
                  {user.firstname}
                </div>
              )}
          </div>
          
        </Link>
    </header>
  );
}

export default Header;
