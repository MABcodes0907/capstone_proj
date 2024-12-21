import { useContext, useState } from "react";
import { UserContext } from "./UserContext";
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios";


function Account() {
    const [redirect, setRedirect] = useState(null);
    const {ready, user, setUser} = useContext(UserContext);

    let {subpage} = useParams();
    if (subpage === undefined) {
        subpage = "account";
    }

    async function logout() {
        await axios.post("/logout");
        setRedirect('/');
        setUser(null);
    }
        

    if(!ready) {
        return (
        <div className="account">
            Loading...
        </div>
    )}
    if(ready && !user && !redirect) {
        return <Navigate to={"/login"} />
    }

    function linkClasses (type=null) {
        let classes = "account-styles"
        if(type === subpage) {
            classes += "-active"
        }
        return classes;
    }

    if(redirect) {
        return <Navigate to={redirect} />
    }
    
    return (
        <div className="account">
            <nav className="account-display">
                <Link to={"/account"} className={linkClasses('account')}>MY PROFILE</Link>
                <Link to={"/account/booking"} className={linkClasses('booking')}>MY BOOKING</Link>
            </nav>
            {subpage === 'account' && (
                <div className="account-profile">
                    Logged in as :{user.firstname}<br/>
                    Email :{user.email} <br/>
                    <button onClick={logout} className="logout-button">
                        Logout
                    </button> 
                </div>
            )}
        </div>
    );
}

export default Account;
