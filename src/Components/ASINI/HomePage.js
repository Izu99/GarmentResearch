import React, { Component } from "react";
import logo from "../../images/logo.png";
import detail1 from "../../images/detail1.png";
import {Link} from 'react-router-dom'

import "../../Styles/HomePage.css";
import "../../Styles/Navbar.css";

export default class HomePage extends Component {
	render() {
		return (
			<div className='homePage'>
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

				<div className='welcome'>
					<h2>Welcome!</h2>
					<div className='welcome-image'>
						<img src='' alt='' />1
					</div>
					<div className='welcome-image'>
						<img src='' alt='' />2
					</div>
					<div className='welcome-image'>
						<img src='' alt='' />3
					</div>
				</div>

				<div className='details'>
				<div className='card'>
				<div className='image'>
					<a href="/traineereport">
					<img src={detail1} alt='Hand Movements' />
					</a>
				</div>
				<h2> Hand Movements</h2>
				</div>

					<div className='card'>
						<div className='image'>
						<a href="/traineereport">
					<img src={detail1} alt='Hand Movements' />
					</a>
						</div>
						<h2>Detect Defects</h2>
					</div>
					<div className='card'>
						<div className='image'>
						<a href="/traineereport">
					<img src={detail1} alt='Hand Movements' />
					</a>
						</div>
						<h2>Detect Posture</h2>
					</div>
					<div className='card'>
						<div className='image'>
						<a href="/deluxReport">
					<img src={detail1} alt='Hand Movements' />
					</a>
						</div>
						<h2>Dexterity Test</h2>
					</div>
				</div>
				<div className='Footer'>
					<div className='top'>
						<h2>Get Connected with Us on Social Networks:</h2>
						<div className='social-links'>
							<i class='fa-brands fa-facebook-f'></i>
							<i class='fa-brands fa-instagram'></i>
							<i class='fa-brands fa-whatsapp'></i>
							<i class='fa-brands fa-facebook-messenger'></i>
							<i class='fa-brands fa-twitter'></i>
							<i class='fa-regular fa-envelope'></i>
						</div>
					</div>
					<div className='bottom'>
						<div className='logo'>
							<h3>SewSmart</h3>
							<img src={logo} alt='' />
						</div>
						<div className='map'>
							<iframe
								src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34254.71306777132!2d-77.06472368828405!3d38.91204325318949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c6de5af6e45b%3A0xc2524522d4885d2a!2sWashington%2C%20DC%2C%20USA!5e1!3m2!1sen!2slk!4v1687680967609!5m2!1sen!2slk'
								width='1000'
								height='100'
								style={{ border: 0 }}
								allowFullScreen=''
								loading='lazy'
								referrerPolicy='no-referrer-when-downgrade'></iframe>
						</div>
						<div className='address'>
							Contact: New York, NY 10012,
							<br /> US info@example.com
							<br />+ 01 234 567 88
							<br />+ 01 234 567 89
						</div>
					</div>
				</div>
			</div>
		);
	}
}
