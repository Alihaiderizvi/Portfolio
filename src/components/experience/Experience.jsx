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
							AboutUs
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
						<i class='fas fa-user-graduate'></i>
					</div>
					<h4>2014-2015</h4>
					<h2>Master Degree of Design</h2>
					<div className='experience__locationIcon'>
						<i class='fas fa-map-marker-alt'></i>
						<p> Muhammad Ali Jinnah University</p>
					</div>
					<p>
						A small river named Duden flows by their place and supplies it with
						the necessary regelialia. It is a paradisematic country, in which
						roasted parts of sentences fly into your mouth.
					</p>
				</Grid>
				<Grid item xs={12} sm={5} className='experience__child'>
					<div className='experience__icon'>
						<i class='fas fa-user-graduate'></i>
					</div>
					<h4>2014-2015</h4>
					<h2>Master Degree of Design</h2>
					<div className='experience__locationIcon'>
						<i class='fas fa-map-marker-alt'></i>
						<p> Muhammad Ali Jinnah University</p>
					</div>
					<p>
						A small river named Duden flows by their place and supplies it with
						the necessary regelialia. It is a paradisematic country, in which
						roasted parts of sentences fly into your mouth.
					</p>
				</Grid>
				<Grid item xs={12} sm={5} className='experience__child'>
					<div className='experience__icon'>
						<i class='fas fa-user-graduate'></i>
					</div>
					<h4>2014-2015</h4>
					<h2>Master Degree of Design</h2>
					<div className='experience__locationIcon'>
						<i class='fas fa-map-marker-alt'></i>
						<p> Muhammad Ali Jinnah University</p>
					</div>
					<p>
						A small river named Duden flows by their place and supplies it with
						the necessary regelialia. It is a paradisematic country, in which
						roasted parts of sentences fly into your mouth.
					</p>
				</Grid>
				<Grid item xs={12} sm={5} className='experience__child'>
					<div className='experience__icon'>
						<i class='fas fa-user-graduate'></i>
					</div>
					<h4>2014-2015</h4>
					<h2>Master Degree of Design</h2>
					<div className='experience__locationIcon'>
						<i class='fas fa-map-marker-alt'></i>
						<p> Muhammad Ali Jinnah University</p>
					</div>
					<p>
						A small river named Duden flows by their place and supplies it with
						the necessary regelialia. It is a paradisematic country, in which
						roasted parts of sentences fly into your mouth.
					</p>
				</Grid>
			</Grid>
		</div>
	);
};

export default Experience;
