import React, { Component } from "react";
import img1 from "../../images/image2.png";
import logo from "../../images/logo.png";

import "../../Styles/GetStarted.css";
import "../../Styles/Navbar.css";

export default class GetStarted extends Component {
	render() {
		return (
			<div className='getStarted'>
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
				<div className='image'>
					<img src={img1} alt='' srcset='' />
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
