import React, { Component } from "react";
import img1 from "../../images/time.png";

import "../../Styles/TimeUp.css";

export default class TimeUp extends Component {
	render() {
		return (
			<div className='timeUp'>
				<h2><i className="fa-solid fa-chevron-left"></i> Time's Up!</h2>

				<div className='image'>
					<img src={img1} alt='' />
				</div>

                <h3>View Score <i className="fa-solid fa-angle-right"></i></h3>
			</div>
		);
	}
}
