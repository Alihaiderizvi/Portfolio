// Imports: React Dom
import React from "react";
// Imports: Material Ui Icons
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
// Import: Internal CSS
import "./AboutUs.css";
// Import: React Sroll
import { Link } from "react-scroll";
const downloadFile = () => {
	window.location.href = "https://docdro.id/tJ1wI2n";
};
const AboutUs = () => {
	return (
		<div className='AboutUs' id='AboutUs'>
			<div className='AboutUs__heading'>
				<div className='AboutUs__breadcrumbs'>
					<p>
						<Link to='header' smooth={true} duration={1000}>
							Home
						</Link>
						<KeyboardArrowRightIcon />
					</p>
					<p>
						About Me
						<KeyboardArrowRightIcon />
					</p>
				</div>
				<h1>About Us</h1>
			</div>
			<section className='AboutUs__section'>
				<div className='AboutUs__leftDiv'>
					<div className='AboutUsLeftDiv__Content'>
						<div className='card card1'>
							<h2>3.20</h2>
							<h4>CGPA</h4>
						</div>
						<div className='card card2'>
							<h2>Freshie</h2>
							<h4>Work Experience</h4>
						</div>
						<div className='card card3'>
							<h2>0,015</h2>
							<h4>Projects Done</h4>
						</div>
						<div className='card card4'>
							<h2>0,004</h2>
							<h4>Happy Clients</h4>
						</div>
					</div>
				</div>
				<div className='AboutUs__RightDiv'>
					<div className='AboutUsRightDiv__Content'>
						<h3>About Me</h3>
						<h2>A Fresh Grad Junior React Js Developer.</h2>
						<p>
							Intern level react js developer, with prior knowledge about npm,
							node, express, and MongoDB. Deep knowledge about JavaScript.
						</p>
						<div className='AboutUsRightDivContent__Child'>
							<div className='AboutUsRightDivContent__LeftChild'>
								<ul>
									<li>
										<span>Name:</span>
										Syed Ali Haider Rizvi
									</li>
									<li>
										<span>Date of birth:</span>
										15-Oct-1998
									</li>
									<li>
										<span>Address:</span>
										Federal B Area,Block-20.
									</li>
								</ul>
							</div>
							<div className='AboutUsRightDivContent__RightChild'>
								<div className='AboutUsRightDivContent__LeftChild'>
									<ul>
										<li>
											<span>Email:</span>
											alihaiderizvi.you@gmail.com
										</li>
										<li>
											<span>Phone:</span>
											+92-315-219-4261
										</li>

										<li>
											<span>City:</span>
											Karachi
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<div className='AboutUs__sectionBtn'>
				<button onClick={downloadFile}>Download CV</button>
			</div>
		</div>
	);
};

export default AboutUs;
