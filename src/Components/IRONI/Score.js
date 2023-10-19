import React, { Component } from "react";
import logo from "../../images/logo.png";
import "../../Styles/Navbar.css";
import "../../Styles/Score.css";

export default class Score extends Component {
	render() {
		return (
			<div className='score'>
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
				<div className='score-percentage'>76%</div>
				{/* <button className='icon-button'>
					<i className='fa-solid fa-chevron-left'></i>
				</button> */}
				<h2> Your Score</h2>
				<div className='score-labels'>
					<div className='top-labels'>
						<label htmlFor=''>
							Candidate ID: <span>ITxxxxxxx</span>
						</label>
						<br />
						<label htmlFor=''>
							Name: <span>Ms. Ironi Peris </span>{" "}
						</label>
						<br />
					</div>

					<div className='bottom-labels'>
						<label htmlFor=''>
							Incorrect Angle of Pegs: <span className='percentage'>20%</span>
						</label>
						<br />
						<label htmlFor=''>
							Incorrect Placement of Washers :{" "}
							<span className='percentage'>40%</span>
						</label>
						<br />
						<label htmlFor=''>
							Incorrect Placement of Bolts :{" "}
							<span className='percentage'>15%</span>
						</label>
						<br />
					</div>
				</div>

				<div className='button'>
					<button>Back to Home</button>
				</div>
			</div>
		);
	}
}
