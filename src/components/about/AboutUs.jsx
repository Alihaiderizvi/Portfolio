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
					<div className='AboutUsRightDiv__Content'>
						<h3>About Me</h3>
						<h2>A UI/UX Designer & Web Developer Based in Philippines</h2>
						<p>
							Far far away, behind the word mountains, far from the countries
							Vokalia and Consonantia, there live the blind texts.
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
				<button>Download CV</button>
			</div>
		</div>
	);
};

export default AboutUs;
