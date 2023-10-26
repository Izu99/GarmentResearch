import React, { Component } from "react";
import img1 from "../../images/time.png";
import logo from "../../images/logo.png";

import stopwatch from "../../images/stopwatch.gif"

import "../../Styles/TimeUp.css";

export default class TimeUp extends Component {
	render() {
		return (
			<div className='timeUp'>
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
				<h2><i className="fa-solid fa-chevron-left"></i> Time's Up!</h2>

				<div className='image'>
					<img src={stopwatch} alt='' />
				</div>

                <h3>View Score <i className="fa-solid fa-angle-right"></i></h3>
			</div>
		);
	}
}
