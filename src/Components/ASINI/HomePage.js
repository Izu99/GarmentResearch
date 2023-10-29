import React, { Component } from "react";
import logo from "../../images/logo.png";
import background from "../../images/top-image.jpg"

import handmovement from "../../images/hand-movement.jpg"
import defectdetect from "../../images/defect-detection.jpg"
import posturedetect from "../../images/posturedetect.jpg"
import dexteritytest from "../../images/dexteritydetect.jpg"

import SimpleSlider from "./slideshow";


import "../../Styles/HomePage.css";
import "../../Styles/Navbar.css";

export default class HomePage extends Component {
	render() {
		return (
			<div className='homePage'>
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

				<div className="p-5" style={{ backgroundColor: '#2A2B3Cf2' }}>
					<SimpleSlider />
				</div>

				{/* <img src={background} alt="" /> */}
				<div className='row'>
					<div className='card col-12'>
						<div className='row'>
							<div className='image col-4'>
								<a href='https://sew-smart.netlify.app'>
									<img src={handmovement} className="img-fluid" alt='Hand Movements' />
								</a>
							</div>
							<div className='col-8'>
								<h2> Hand Movements</h2>
								<p>
									{" "}
									Our system is like a pair of extra eyes that never miss a detail. It watches the
									way hands move during the garment making process. Just like a seasoned expert, it
									can tell if the movements are just right or if something is off. This helps in
									ensuring that every piece of clothing is made with utmost care and precision.
								</p>
							</div>
						</div>
					</div>

					<div className='card col-12'>
						<div className='row'>
							<div className='image col-4'>
								<a href='/traineereport'>
									<img src={defectdetect} className="img-fluid " alt='Hand Movements' />
								</a>
							</div>
							<div className='col-8'>
								<h2>Detect Defects</h2>
								<p>
									Imagine having a supervisor who’s sole job is href find mistakes. That’s what our
									system does when it comes href spotting defects in garments. It diligently checks
									each garment, ensuring that no defect, no matter how small, goes unnoticed. This
									means every piece you get is close href perfection.
								</p>
							</div>
						</div>
					</div>
					<div className='card col-12'>
						<div className='row'>
							<div className='image col-4'>
								<a href='https://posturedetection.f8783.web.app'>
									<img src={posturedetect} className="img-fluid" alt='Hand Movements' />
								</a>
							</div>
							<div className='col-8'>
								<h2>Detect Posture</h2>
								<p>
									The way one stands or sits while working can tell a lot about the work quality.
									Our system keeps an eye on this hrefo. It checks if the workers are maintaining a
									healthy posture while working. This not only helps in ensuring good work quality
									but also cares for the well-being of the workers.
								</p>
							</div>
						</div>
					</div>
					<div className='card col-12'>
						<div className='row'>
							<div className='image col-4'>
								<a href='/deluxReport'>
									<img src={dexteritytest} className="img-fluid" alt='Hand Movements' />
								</a>
							</div>
							<div className='col-8'>
								<h2>Dexterity Test</h2>
								<p>
									Dextirity test detection-identify the detects of the hand dextirity test defect detection-identify the defect of the sewed garments monitor posture monitoring the trainee operator sitting posture hand movements-detect imprecies hand movements of trainee sewing operators

								</p>
							</div>
						</div>
					</div>
				</div>
				<div className='Footer'>
					<div className='top'>
						<div className="top-content"></div>
						<div className="top-content">
							<h2>Get Connected with Us on Social Networks:</h2>
						</div>

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
								width='800'
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
