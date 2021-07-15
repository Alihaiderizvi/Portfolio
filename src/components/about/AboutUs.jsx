// Imports: React Dom
import React from "react";
// Imports: Material Ui Icons
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
// Import: Internal CSS
import "./AboutUs.css";
// Import: images

const AboutUs = () => {
	return (
		<div className='AboutUs'>
			<div className='AboutUs__heading'>
				<div className='AboutUs__breadcrumbs'>
					<p>
						<a href='/'>Home</a>
						<KeyboardArrowRightIcon />
					</p>
					<p>
						About Us
						<KeyboardArrowRightIcon />
					</p>
				</div>
				<h1>About Us</h1>
			</div>
			<section className='AboutUs__section'>
				<div className='AboutUs__leftDiv'>
					<div className='AboutUsLeftDiv__Content'>
						<div className='card card1'>
							<h2>1,000</h2>
							<h4>Happy Clients</h4>
						</div>
						<div className='card card2'>
							<h2>1,000</h2>
							<h4>Projects Done</h4>
						</div>
						<div className='card card3'>
							<h2>Freshie</h2>
							<h4>Work Experience</h4>
						</div>
						<div className='card card4'>
							<h2>3.20</h2>
							<h4>CGPA</h4>
						</div>
					</div>
				</div>
				<div className='AboutUs__RightDiv'>
					<div className='AboutUsRightDiv__Content'></div>
				</div>
			</section>
		</div>
	);
};

export default AboutUs;
