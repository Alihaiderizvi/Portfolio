// Import: react DOM
import React from "react";
// Imports: Material UI Core
import Grid from "@material-ui/core/Grid";
// Imports: Material UI Icons
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
// Imports: Internal Css
import "./Experience.css";
// Import: React Sroll
import { Link } from "react-scroll";

const Experience = () => {
	return (
		<div className='experience' id='Experience'>
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
						Experience
						<KeyboardArrowRightIcon />
					</p>
				</div>
				<h1>Experience</h1>
			</div>
			<Grid
				container
				spacing={3}
				justify='space-evenly'
				style={{ marginTop: "2rem" }}
			>
				<Grid item xs={12} sm={5} className='experience__child'>
					<div className='experience__icon'>
						<i class='fas fa-shuttle-van'></i>
					</div>
					<h4>2021-2021</h4>
					<h2>Carvan - Drive the future</h2>
					<div className='experience__locationIcon'>
						<i class='fas fa-map-marker-alt'></i>
						<p>National Incubation Center, NED University, Karachi.</p>
					</div>
					<p>
						Carvan a startup that focuses month-to-month car service for an
						employee, staff, or school kids, I worked here as an application
						manager the application was MEAN Stack/ Angular based.
					</p>
				</Grid>
				<Grid item xs={12} sm={5} className='experience__child'>
					<div className='experience__icon'>
						<i class='fas fa-laptop-house'></i>
					</div>
					<h4>2020-2021</h4>
					<h2>ezTech Solutions</h2>
					<div className='experience__locationIcon'>
						<i class='fas fa-map-marker-alt'></i>
						<p>P.E.C.H.S ,Karachi.</p>
					</div>
					<p>
						ezTech Solutions was my first job as a simple Web developer where I
						was appointed to develop modern and efficient websites using basic
						HTML, CSS and JavaScript, no frameworks no libraries.
					</p>
				</Grid>
				<Grid item xs={12} sm={5} className='experience__child'>
					<div className='experience__icon'>
						<i class='fas fa-user-graduate'></i>
					</div>
					<h4>2017-2021</h4>
					<h2>Grad Degree of Computer Scientist</h2>
					<div className='experience__locationIcon'>
						<i class='fas fa-map-marker-alt'></i>
						<p> Muhammad Ali Jinnah University</p>
					</div>
					<p>
						Muhammad Ali Jinnah University, one of the finest universities in
						Karachi. Cleared my graduation lifetime with a good CGPA of 3.2.
					</p>
				</Grid>
				<Grid item xs={12} sm={5} className='experience__child'>
					<div className='experience__icon'>
						<i class='fas fa-user-graduate'></i>
					</div>
					<h4>2014-2015</h4>
					<h2>Inremediate Certification</h2>
					<div className='experience__locationIcon'>
						<i class='fas fa-map-marker-alt'></i>
						<p>BufferZone Degree College</p>
					</div>
					<p>Cleared my HSC I and II with a good percentage of 68%.</p>
				</Grid>
			</Grid>
		</div>
	);
};

export default Experience;
