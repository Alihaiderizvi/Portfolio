// Imports: React Dom
import React from "react";
// Imports: Material Ui Icons
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
// Import: Internal CSS
import "./Services.css";

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
		<div className='services'>
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
