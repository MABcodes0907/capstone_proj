import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function AdminRegister() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function registerAdmin(ev) {
		ev.preventDefault();
		axios.post('/adminregister', {
			email,
			password,
		})
	}

	return (
		<div className="login">
			<div className="login-page-title">
				<p>Admin Register</p>
			</div>
			<form className="login-form" onSubmit={registerAdmin}>
				<label htmlFor="user"></label>
					<input className="email" type="text" placeholder="Email" 
						value={email}
						onChange={ev => setEmail(ev.target.value)}
					/>
					<input className="password" type="password" placeholder="Password" 
						value={password}
						onChange={ev => setPassword(ev.target.value)}
					/>
					<button className="submit-btn" type="submit" aria-label="submit">
						Register
					</button>
					<div>
						Already a Admin? <Link className="member" to={'/adminlogin'}>Login</Link>
					</div>
			</form>
		</div>
  	);
}

export default AdminRegister;
