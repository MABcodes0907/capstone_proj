import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Register() {

	const [firstname, setFirstname] = useState("");
	const [lastname, setLastname] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function registerUser(ev) {
		ev.preventDefault();
		axios.post('/register', {
			firstname,
			lastname,
			email,
			password,
		})
	}

	return (
		<div className="login">
			<div className="login-page-title">
				<p>MEGAY BEACH RESORT</p>
			</div>
			<form className="login-form" onSubmit={registerUser}>
				<label htmlFor="user"></label>
					<input className="firstname" type="text" placeholder="Firstname" 
						value={firstname}
						onChange={ev => setFirstname(ev.target.value)}
					/>
					<input className="lastname" type="text" placeholder="Lastname" 
						value={lastname}
						onChange={ev => setLastname(ev.target.value)}
					/>
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
						Already a member? <Link className="member" to={'/login'}>Login</Link>
					</div>
			</form>
		</div>
  	);
}

export default Register;
