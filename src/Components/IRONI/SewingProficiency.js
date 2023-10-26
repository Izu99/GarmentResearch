import React, { Component } from "react";
import logo from "../../images/logo.png";

import "../../Styles/SewingProficiency.css";

export default class SewingProficiency extends Component {
	render() {
		return (
			<div className='proficiency'>
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
				<div className='proficiency-percentage'><p> 45%</p></div>
				<button className='icon-button'>
					<i className='fa-solid fa-chevron-left'></i>
				</button>
				<h2> Candidate Sewing Proficiency</h2>
				<div className='top-labels'>
					<label htmlFor=''>
						Candidate ID: <span>ITxxxxxxx</span>
					</label>
					<br />
					<label htmlFor=''>
						Name: <span>Ironi Peris </span>{" "}
					</label>
					<br />
					<label htmlFor=''>
						Age: <span>24</span>
					</label>
					<br />
				</div>

				<div className='bottom-labels'>
					<label htmlFor=''>
						Speed
						<span className='percentage'>10%</span>
					</label>
					<br />
					<label htmlFor=''>
						Sewing Straightly Skill
						<span className='percentage'>15%</span>
					</label>
					<br />
					<label htmlFor=''>
						Take fabric to the needle
						<span className='percentage'>20%</span>
					</label>
					<br />
				</div>


			</div>
		);
	}
}
