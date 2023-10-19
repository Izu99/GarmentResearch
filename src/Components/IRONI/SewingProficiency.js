import React, { Component } from "react";

import "../../Styles/SewingProficiency.css";

export default class SewingProficiency extends Component {
	render() {
		return (
			<div className='proficiency'>
				<div className='proficiency-percentage'>45%</div>
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
