// Imports: React DOM
import React, { useState } from "react";
// Imports: Material UI Core
import { IconButton } from "@material-ui/core";
// Imports: Material UI Icons
import MenuIcon from "@material-ui/icons/Menu";
// Imports: Internal Css
import "./Navbar.css";
// Import: React Sroll
import { Link } from "react-scroll";

// Material Ui Core
import Menu from "@material-ui/core/Menu";

// Material Ui Style
import { withStyles } from "@material-ui/styles";

const StyledMenu = withStyles({
	paper: {
		border: "1px solid #d3d4d5",
	},
})((props) => (
	<Menu
		elevation={0}
		getContentAnchorEl={null}
		anchorOrigin={{
			vertical: "bottom",
			horizontal: "center",
		}}
		transformOrigin={{
			vertical: "top",
			horizontal: "center",
		}}
		{...props}
	/>
));

const Navbar = () => {
	// Menu
	const [anchorEl, setAnchorEl] = useState(null);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	// Navbar
	const [showul, setShowul] = useState(false);
	const [navbarBg, setNavbarBg] = useState(false);

	const changeNavBg = () => {
		if (window.scrollY >= 750) {
			setNavbarBg(true);
		} else {
			setNavbarBg(false);
		}
	};

	window.addEventListener("scroll", changeNavBg);
	// const handleClickNavbar = () => {
	// 	setShowul(!showul);
	// };

	return (
		<div className='navbar' id='navbar'>
			<div
				className={
					navbarBg ? "navbar__Wrapper navbar__active" : "navbar__Wrapper"
				}
			>
				<h2 className='Logo'>Ali Haider</h2>
				<IconButton onClick={handleClick}>
					<MenuIcon />
				</IconButton>
				<StyledMenu
					id='customized-menu'
					anchorEl={anchorEl}
					keepMounted
					open={Boolean(anchorEl)}
					onClose={handleClose}
				>
					<div className='Navbar__Links'>
						<ul className='Navbar__ul'>
							<li className='Navbar__Link'>
								<Link smooth={true} duration={1000} to='header'>
									Home
								</Link>
							</li>
							<li className='Navbar__Link'>
								<Link smooth={true} duration={1000} to='AboutUs'>
									About
								</Link>
							</li>
							<li className='Navbar__Link'>
								<Link smooth={true} duration={1000} to='skillSection'>
									Skills
								</Link>
							</li>
							<li className='Navbar__Link'>
								<Link smooth={true} duration={1000} to='Experience'>
									Experience
								</Link>
							</li>
							<li className='Navbar__Link'>
								<Link smooth={true} duration={1000} to='service'>
									Service
								</Link>
							</li>
							<li className='Navbar__Link'>
								<Link smooth={true} duration={1000} to='contact'>
									Contact
								</Link>
							</li>
						</ul>
					</div>
				</StyledMenu>
			</div>
			{showul ? (
				<div className='Navbar__Links'>
					<ul className='Navbar__ul'>
						<li className='Navbar__Link'>
							<Link smooth={true} duration={1000} to='header'>
								Home
							</Link>
						</li>
						<li className='Navbar__Link'>
							<Link smooth={true} duration={1000} to='AboutUs'>
								About
							</Link>
						</li>
						<li className='Navbar__Link'>
							<Link smooth={true} duration={1000} to='skillSection'>
								Skills
							</Link>
						</li>
						<li className='Navbar__Link'>
							<Link smooth={true} duration={1000} to='Experience'>
								Experience
							</Link>
						</li>
						<li className='Navbar__Link'>
							<Link smooth={true} duration={1000} to='service'>
								Service
							</Link>
						</li>
						<li className='Navbar__Link'>
							<Link smooth={true} duration={1000} to='contact'>
								Contact
							</Link>
						</li>
					</ul>
				</div>
			) : (
				<></>
			)}
		</div>
	);
};

export default Navbar;
