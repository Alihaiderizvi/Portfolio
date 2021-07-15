// Imports: React Dom
import React from "react";
// Imports: Material Ui Icons
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
// Import: Internal CSS
import "./AboutUs.css";
// Import: images

const AboutUs = () => {
	return (
		<div className='Aboutus'>
			<div className='AboutUs__heading'>
				<div className='breadcrumbs'>
					<p>
						<a href='/'>Home</a>
						<KeyboardArrowRightIcon />
					</p>
					<p>
						About Us
						<KeyboardArrowRightIcon />
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
