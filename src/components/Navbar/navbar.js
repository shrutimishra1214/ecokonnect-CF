import React, { useState } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

import NavbarListItems from './navbar-list-items';
import { MenuAlt3 } from '@styled-icons/heroicons-solid';

const NavbarWrapper = styled.div`
	position: absolute;
	top: 2em;
	right: 2em;
	background: ${(props) => (props.open ? '#1d976c' : 'transparent')};
	background: ${(props) =>
		props.open ? '-webkit-linear-gradient(to bottom, #93f9b9, #1d976c)' : 'transparent'};
	background: ${(props) => (props.open ? 'linear-gradient(to bottom,#93f9b9,#1d976c)' : 'transparent')};
	padding: 2em;
	padding-top: 4em;
	width: 14em;
	border-radius: 7px;
	color: white;
	z-index: 2;
	a {
		color: #000;
		text-decoration: none;
	}
	&.enter,
	&.appear {
		/*We give the list the initial dimension of the list button*/
		width: 3em;
		height: 3em;
		opacity: 0.2;
	}
	&.enter-active,
	&.appear-active {
		width: 14em;
		height: 14em;
		opacity: 1;
		transition: all 500ms;
	}
	&.exit {
		transform-origin: 90% 10%;
		transform: scaleY(0.8);
		opacity: 0.5;
		background: #1d976c;
		background: -webkit-linear-gradient(to bottom, #93f9b9, #1d976c);
		background: linear-gradient(to bottom, #93f9b9, #1d976c);
	}
	/* fires as element leaves the DOM*/
	&.exit-active {
		transform: scale(0.1);
		opacity: 1;
		border-radius: 50%;
		background: #1d976c;
		background: -webkit-linear-gradient(to bottom, #93f9b9, #1d976c);
		background: linear-gradient(to bottom, #93f9b9, #1d976c);
		transition: all 500ms;
	}
	${({ theme, open }) =>
		theme.query.mobile({
			top: open ? '1em' : '0',
			right: open ? '1em' : '0',
			background: open ? '#a1ffce' : 'transparent',
			background: open ? '-webkit-linear-gradient(to left, #faffd1, #a1ffce)' : 'transparent',
			background: open ? 'linear-gradient(to left,#faffd1,#a1ffce)' : 'transparent',
		})}
	${({ theme, open }) =>
		theme.query.smallMobile({
			top: open ? '1em' : '-1em',
			right: open ? '1em' : '-1.2em',
		})}
	@media (max-width: 350px) {
		&.exit {
			transform-origin: 80% 15%;
		}
	}
`;

const NavbarLogo = styled(MenuAlt3)`
	position: absolute;
	top: 3em;
	right: ${(props) => (props.open ? '16em' : '3em')};
	z-index: 4;
	width: 2em;
	padding: 7px;
	color: ${(props) => props.theme.colors.primary};
	border: 2px solid ${(props) => props.theme.colors.secondary};
	border-radius: 50%;
	background-color: ${(props) => (props.open ? props.theme.colors.secondary : props.theme.colors.forest)};
	cursor: pointer;
	display: block;
	transform: ${(props) => (props.open ? 'scaleX(-1)' : null)};
	transition: all 500ms;
	${({ theme, open }) =>
		theme.query.mobile({
			top: open ? '1.5em' : '1.5em',
			right: open ? '15em' : '1.5em',
		})}
`;

const OpacityNavbar = styled.div`
	position: absolute;
	width: 100vw;
	height: 100vh;
	background: #000000ab;
	z-index: 1;
	&.enter,
	&.appear {
		opacity: 0.5;
	}
	&.enter-active,
	&.appear-active {
		opacity: 1;
		transition: all 400ms;
	}
	&.exit {
		opacity: 0.9;
	}

	&.exit-active {
		opacity: 0;
		transition: all 400ms;
	}
`;

const Navbar = () => {
	const [open, setOpen] = useState(false);

	const handleNavbar = () => {
		setOpen(!open);
	};

	return (
		<>
			<NavbarLogo onClick={handleNavbar} open={open} />
			<CSSTransition in={open} timeout={400} unmountOnExit appear>
				<NavbarWrapper open={open}>
					<NavbarListItems />
				</NavbarWrapper>
			</CSSTransition>
			<CSSTransition in={open} timeout={400} unmountOnExit appear>
				<OpacityNavbar onClick={handleNavbar} />
			</CSSTransition>
		</>
	);
};

export default Navbar;
