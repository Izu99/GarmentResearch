import React, { Component } from "react";
import logo from "../../images/logo.png";

import "../../Styles/Instructions.css";

export default class Instructions extends Component {
	render() {
		return (
			<div className='instructions'>
				<nav class='navbar navbar-expand-lg'>
					<a class='navbar-brand d-flex justify-content-between ms-5' href='#'>
						<img src={logo} alt='' /><h2 className="fs-4 ms-2 mt-1">Sew Smart</h2>
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
								<a class='nav-link ms-5' href='/homepage'>
									Home
								</a>
							</li>
							<li class='nav-item active'>
								<a class='nav-link ms-5' href='/traineereport'>
									Progress View
								</a>
							</li>
							<li class='nav-item active'>
								<a class='nav-link ms-5' href='/deluxreport'>
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
                <i className="fa-solid fa-chevron-left"></i>
				<h2>Instructions before Start</h2>
				<div className='instruction'>
					<p>instruction</p>
                    <p>instruction</p>
                    <p>instruction</p>
                    <p>instruction</p>
				</div>
				<div className='button'>
					<button>Start</button>
				</div>
			</div>
		);
	}
}
