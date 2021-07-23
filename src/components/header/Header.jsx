// Imports: React Dom
import React from "react";
import Navbar from "../navbar/Navbar";
// Imports: Material Ui Icons
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
// Imports: Material Ui Core
import { IconButton } from "@material-ui/core";
// Import: Internal CSS
import "./Header.css";
// Import: images
import background1 from "../../assets/bg1.png";
// Import: React Sroll
import { Link } from "react-scroll";
// Import: React Spring- Animation
import { Spring } from "react-spring";

const Header = () => {
	return (
		<div className='Header' id='header'>
			<div className='overlay'></div>
			<Navbar />
			<div className='header__Wrapper'>
				<div className='header__leftDiv'>
					<Spring
						from={{ opacity: 0, marginRight: -500 }}
						to={{ opacity: 1, marginRight: 0 }}
					>
						{(props) => (
							<div style={props}>
								<div className='headerLeftDiv__Content'>
									<h2 className='headerLeftDiv__firstHeading'>
										React Js Junior Developer
									</h2>
								</div>
								<h1 className='headerLeftDiv__SecondHeading'>
									I'm Syed Ali Haider Rizvi
								</h1>
								<div className='headerLeftDiv__btns'>
									<p className=''>
										<Link to='AboutUs' smooth={true} duration={1000}>
											More About Me
										</Link>
										<ArrowRightAltIcon />
									</p>
									<Link to='contact' smooth={true} duration={1000}>
										Hire Me
									</Link>
								</div>
							</div>
						)}
					</Spring>
				</div>
				<div className='header__rightDiv'>
					<div className='headerRightDiv__Content'>
						<img src={background1} alt='bg' />
					</div>
				</div>
			</div>
			<div className='scrollToTop'>
				<Link to='header' smooth={true} duration={1000}>
					<IconButton style={{ color: "#fff" }}>
						<ArrowUpwardIcon />
					</IconButton>
				</Link>
			</div>
		</div>
	);
};

export default Header;
