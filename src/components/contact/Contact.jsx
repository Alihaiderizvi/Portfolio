// Imports: React Dom
import React from "react";
// Imports: Material Ui Icons
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
// Import: Internal CSS
import "./Contact.css";
// Import : Google Map
import Map from "../googleMap/Map";
// Import Form Component
import ConForm from "./ConForm";
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
			<section className='Contact__Section'>
				<div className='Contact__form'>
					<ConForm />
				</div>
				<div className='ContactForm__map'>
					<Map />
				</div>
			</section>
		</div>
	);
};

export default Contact;
