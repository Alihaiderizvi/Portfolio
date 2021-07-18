// Imports: React Dom
import React from "react";
// Imports: Material Ui Icons
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
// Import: Internal CSS
import "./Contact.css";
import Map from "../googleMap/Map";

const Contact = () => {
	return (
		<div className='contact'>
			<div className='services__heading'>
				<div className='Services__breadcrumbs'>
					<p>
						<a href='/'>Home</a>
						<KeyboardArrowRightIcon />
					</p>
					<p>
						<a href='/'>AboutUs</a>
						<KeyboardArrowRightIcon />
					</p>
					<p>
						<a href='/'>Skills</a>
						<KeyboardArrowRightIcon />
					</p>
					<p>
						<a href='/'>Services</a>
						<KeyboardArrowRightIcon />
					</p>
					<p>
						Contact Us
						<KeyboardArrowRightIcon />
					</p>
				</div>
				<h1>Contact Us </h1>
			</div>
			<div style={{ width: "100%", height: "400px" }}>
				<Map />
			</div>
		</div>
	);
};

export default Contact;
