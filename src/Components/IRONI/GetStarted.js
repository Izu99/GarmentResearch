import React, { Component } from "react";
import img1 from "../../images/image2.png";
import logo from "../../images/logo.png";

import { NavLink } from "react-router-dom";


import "../../Styles/GetStarted.css";
import "../../Styles/Navbar.css";

export default class GetStarted extends Component {
	render() {
		return (
			<div className='getStarted'>
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
				<div className='image'>
					<img src={img1} className="img-fluid" alt='' srcset='' />
				</div>
				<div className='button'>
					<a href='./candidateregister'>
						<button>Start Test</button>
					</a>
				</div>
			</div>
		);
	}
}
