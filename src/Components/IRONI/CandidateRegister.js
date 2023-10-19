import React, { Component } from "react";
import logo from "../../images/logo.png";

import "../../Styles/CandidateRegister.css";
import "../../Styles/Navbar.css";

export default class CandidateRegister extends Component {
	render() {
		return (
			<div className='register'>
				<header className='navbar'>
					<ul>
						<img src={logo} alt='' />
						<li>Home</li>
						<li>Progress View</li>
						<li>Progress Report</li>
						<li>Contact Us</li>
						<li>About</li>
					</ul>
				</header>

				<div className='test'>
					<form>
						<h2>Register</h2>
						<input type='text' placeholder='Candidate Id' />
						<br />

						<input type='text' placeholder='Name' />
						<br />

						<input type='number' placeholder='Age' />
						<br />

						<input type='date' placeholder='Joined Date' />
						<br />

						<div className='button'>
							<button>Submit</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}
