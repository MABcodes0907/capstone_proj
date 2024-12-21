import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import {UserContext} from "./UserContext";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const {setUser} = useContext(UserContext);

    async function handleLoginSubmit(ev) {
        ev.preventDefault();
        try {
            const {data} = await axios.post('/login', {email, password});
            setUser(data);
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
            <p>MEGAY BEACH RESORT</p>
        </div>
        <form className="login-form" onSubmit={handleLoginSubmit}>
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
                    Don't have an account? <Link className="member" to={'/register'}>Register</Link>
                </div>
                <div>
                    Log in as <Link className="member" to={'/adminlogin'}>Admin</Link>
                </div>
        </form>
    </div>
  );
}

export default Login;
