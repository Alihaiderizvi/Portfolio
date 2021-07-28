// Imports: React Dom
import React from "react";
// Imports: Material Ui Icons
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
// Import: Internal CSS
import "./Services.css";
// Import: React Sroll
import { Link } from "react-scroll";

const data = [
	{
		iconClass: "fas fa-palette",
		title: "UI/UX Design",
		description:
			"I can build a good UI with the best UX that entertains the user and their comfort using Photoshop PSD.",
	},
	{
		iconClass: "fab fa-chrome",
		title: "Web Development",
		description:
			"I can build SPA, multi-page websites, or anything according to your need that would be completely responsive. Tech stack would be React js as frontend.",
	},
	{
		iconClass: "fas fa-ellipsis-h",
		title: "More To Come",
		description:
			"By the time more services would be added till then happy searching.",
	},
];
const Services = () => {
	return (
		<div className='services' id='service'>
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
						Services
						<KeyboardArrowRightIcon />
					</p>
				</div>
				<h1>What I Do?</h1>
			</div>
			<div className='services__section'>
				{data.map((d, index) => (
					<div className='service' key={index}>
						<i className={d.iconClass}></i>
						<h2>{d.title}</h2>
						<div className='Service__text'>
							<p>{d.description}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Services;
