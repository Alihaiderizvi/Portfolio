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
		iconClass: "fab fa-chrome",
		title: "UI/UX Design",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
	},
	{
		iconClass: "fas fa-palette",
		title: "Web Development",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
	},
	{
		iconClass: "fab fa-artstation",
		title: "UI/UX Design",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
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
