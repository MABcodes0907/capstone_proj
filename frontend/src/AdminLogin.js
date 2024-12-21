import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import {AdminContext} from "./AdminContext";

function AdminLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const {setAdmin} = useContext(AdminContext);

    async function handleAdminLoginSubmit(ev) {
        ev.preventDefault();
        try {
            const {data} = await axios.post('/adminlogin', {email, password});
            setAdmin(data);
            alert('Login successful');
            setRedirect(true);
        }   catch (e) {
            alert('Login failed');
        }
    }

    if(redirect)
        return <Navigate to={'/'} />

  return (
    <div className="login">
        <div className="login-page-title">
            <p>Admin Login</p>
        </div>
        <form className="login-form" onSubmit={handleAdminLoginSubmit}>
            <label htmlFor="user" ></label>
                <input className="email" type="text" placeholder="Email"required
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
                />
                <input className="password" type="password" placeholder="Password" required
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
                />
                <button className="submit-btn" type="submit" aria-label="submit">
                    Login
                </button>
                <div>
                    Don't have an Admin account? <Link className="member" to={'/adminregister'}>Register</Link>
                </div>
                <div>
                    Log in as <Link className="member" to={'/admin'}>User</Link>
                </div>
        </form>
    </div>
  );
}

export default AdminLogin;
