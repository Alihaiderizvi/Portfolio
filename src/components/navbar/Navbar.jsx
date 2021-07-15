// Imports: React DOM
import React, { useState } from "react";
// Imports: Material UI Core
import { IconButton } from "@material-ui/core";
// Imports: Material UI Icons
import MenuIcon from "@material-ui/icons/Menu";
// Imports: Internal Css
import "./Navbar.css";

const Navbar = () => {
	const [showul, setShowul] = useState(false);

	const handleClick = () => {
		setShowul(!showul);
	};

	return (
		<div className='navbar'>
			<div className='navbar__Wrapper'>
				<h2 className='Logo'>Ali Haider</h2>
				<IconButton onClick={handleClick} style={{ color: "black" }}>
					<MenuIcon />
				</IconButton>
			</div>
			{showul ? (
				<div className='Navbar__Links'>
					<ul className='Navbar__ul'>
						<li className='Navbar__Link'>Home</li>
						<li className='Navbar__Link'>About</li>
						<li className='Navbar__Link'>Projects</li>
						<li className='Navbar__Link'>Experience</li>
						<li className='Navbar__Link'>Contact</li>
					</ul>
				</div>
			) : (
				<></>
			)}
		</div>
	);
};

export default Navbar;
