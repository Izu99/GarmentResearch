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
				<header className='navbar'>
					<ul>
						<img src={logo} alt='' />

						<li>
							<NavLink to='/' activeClassName='active-link'>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink to='#' activeClassName='active-link'>
								Progress View
							</NavLink>
						</li>
						<li>
							<NavLink to='#' activeClassName='active-link'>
								Progress Report
							</NavLink>
						</li>
						<li>
							<NavLink to='#' activeClassName='active-link'>
								Contact Us
							</NavLink>
						</li>
						<li>
							<NavLink to='#' activeClassName='active-link'>
								About
							</NavLink>
						</li>
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
