import React, { Component } from "react";

import "../../Styles/Instructions.css";

export default class Instructions extends Component {
	render() {
		return (
			<div className='instructions'>
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
