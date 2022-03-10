import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';

const LogoStyle = styled.img`
	position: absolute;
	top: -1em;
	left: 1em;
	width: 9em;
	z-index: 99;
	@media (max-width: 700px) {
		top: -0.9em;
		left: 37%;
		width: 5em;
	}
	@media (max-width: 350px) {
		top: -0.9em;
		left: 45%;
		width: 5em;
	}
	@media (max-width: 330px) {
		left: 35%;
	}
`;

const NavbarLogo = () => {
	return (
		<Link to='/'>
			<LogoStyle src={logo} alt='logo'></LogoStyle>
		</Link>
	);
};

export default NavbarLogo;
