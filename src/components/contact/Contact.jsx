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
// Import: React Sroll
import { Link } from "react-scroll";

const Contact = () => {
	return (
		<div className='contact' id='contact'>
			<div className='services__heading'>
				<div className='Services__breadcrumbs'>
					<p>
						<Link to='header' smooth={true} duration={1000}>
							Home
						</Link>
						<KeyboardArrowRightIcon />
					</p>
					<p>
						<Link to='AboutUs' smooth={true} duration={1000}>
							About Me
						</Link>
						<KeyboardArrowRightIcon />
					</p>
					<p>
						<Link to='skillSection' smooth={true} duration={1000}>
							Skills
						</Link>
						<KeyboardArrowRightIcon />
					</p>
					<p>
						<Link to='skillSection' smooth={true} duration={1000}>
							Services
						</Link>
						<KeyboardArrowRightIcon />
					</p>
					<p>
						<Link to='Experience' smooth={true} duration={1000}>
							Experience
						</Link>
						<KeyboardArrowRightIcon />
					</p>
					<p>
						Contact Me
						<KeyboardArrowRightIcon />
					</p>
				</div>
				<h1>Contact Me </h1>
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
