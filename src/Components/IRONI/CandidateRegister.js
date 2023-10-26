import React, { Component } from "react";
import logo from "../../images/logo.png";

import "../../Styles/CandidateRegister.css";
import "../../Styles/Navbar.css";

export default class CandidateRegister extends Component {
	render() {
		return (
			<div className='candidate-register'>
				<nav class='navbar navbar-expand-lg'>
					<a class='navbar-brand d-flex justify-content-between ms-5' href='#'>
						<img src={logo} alt='' />
					</a>
					<button
						class='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarSupportedContent'
						aria-controls='navbarSupportedContent'
						aria-expanded='false'
						aria-label='Toggle navigation'>
						<span class='navbar-toggler-icon'></span>
					</button>

					<div class='collapse navbar-collapse justify-content-center' id='navbarSupportedContent'>
						<ul class='navbar-nav mr-auto'>
							<li class='nav-item active'>
								<a class='nav-link ms-5' href='#'>
									Home
								</a>
							</li>
							<li class='nav-item active'>
								<a class='nav-link ms-5' href='#'>
									Progress View
								</a>
							</li>
							<li class='nav-item active'>
								<a class='nav-link ms-5' href='#'>
									Progress Report
								</a>
							</li>
							<li class='nav-item active'>
								<a class='nav-link ms-5' href='#'>
									Contact Us
								</a>
							</li>
							<li class='nav-item active'>
								<a class='nav-link ms-5' href='#'>
									About
								</a>
							</li>
						</ul>
					</div>
				</nav>

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
