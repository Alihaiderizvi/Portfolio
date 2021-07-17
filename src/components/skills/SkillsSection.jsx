// Imports: React DOM
import React from "react";
// Imports: Internal CSS
import "./SkillsSection.css";
// Imports: Material Ui Core
import { LinearProgress, withStyles } from "@material-ui/core";
// Imports: Material Ui Icons

const BorderLinearProgress = withStyles((theme) => ({
	root: {
		height: 10,
		borderRadius: 5,
	},
	colorPrimary: {
		backgroundColor: "#e5e5e5",
	},
	bar: {
		borderRadius: 5,
		backgroundColor: "#d5c455",
	},
}))(LinearProgress);

const skills = [
	{ skill: "Html", percentage: "85" },
	{ skill: "Css", percentage: "80" },
	{ skill: "JavaScript", percentage: "75" },
	{ skill: "Bootstrap", percentage: "60" },
	{ skill: "Material-Ui", percentage: "85" },
	{ skill: "DBMS", percentage: "75" },
	{ skill: "NodeJs", percentage: "50" },
	{ skill: "ExpressJs", percentage: "40" },
	{ skill: "MongoDB", percentage: "40" },
];

const SkillsSection = () => {
	return (
		<div className='skillsSection'>
			<div className='skillSrction__Wrapper'>
				<div className='skillSection__Heading'>
					<h4 className='skillSection__SubHeading'>Skills</h4>
					<h2 className='skillSection__MainHeading'>My Skills</h2>
				</div>

				<div className='skillSection__bars'>
					{skills.map((data, index) => (
						<div className='skillSection__bar' key={index}>
							<div className='skillSectionBar__headings'>
								<h5 style={{ textTransform: "uppercase" }}>{data.skill}</h5>
								<h5>{data.percentage}</h5>
							</div>
							<BorderLinearProgress
								variant='determinate'
								value={data.percentage}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default SkillsSection;
