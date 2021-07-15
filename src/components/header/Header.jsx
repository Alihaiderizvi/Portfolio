// Imports: React Dom
import React from "react";
import Navbar from "../navbar/Navbar";
// Imports: Material Ui Icons
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
// Import: Internal CSS
import "./Header.css";
// Import: images
import background1 from "../../assets/bg1.png";

const Header = () => {
	return (
		<div className='Header'>
			<div className='overlay'></div>
			<Navbar />
			<div className='header__Wrapper'>
				<div className='header__leftDiv'>
					<div className='headerLeftDiv__Content'>
						<h2 className='headerLeftDiv__firstHeading'>
							React Js Junior Developer
						</h2>
						<h1 className='headerLeftDiv__SecondHeading'>
							I'm Syed Ali Haider Rizvi
						</h1>
						<div className='headerLeftDiv__btns'>
							<p className=''>
								<a href='/'>More About Me</a>
								<ArrowRightAltIcon />
							</p>
							<a href='/'>Hire Me</a>
						</div>
					</div>
				</div>
				<div className='header__rightDiv'>
					<div className='headerRightDiv__Content'>
						<img src={background1} alt='bg' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
