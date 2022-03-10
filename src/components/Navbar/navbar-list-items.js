import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarLinkStyle = styled.div`
	position: relative;
	transition: 0.5s;
	font-weight: 500;
	padding: 5px;
	border-bottom: 2px solid black;
	padding: 0.8em 0em;
	font-size: 22px;

	&:before {
		content: '';
		position: absolute;
		bottom: -2px;
		left: 0;
		width: 100%;
		height: 3px;
		background: white;
		z-index: 1;
		transform: scaleX(0);
		transform-origin: left;
		transition: transform 0.6s;
	}

	&:hover {
		cursor: pointer;
		color: white;
	}

	&:hover:before {
		transform: scaleX(1);
		transform-origin: left;
	}
	@media (max-width: 500px) {
		border-bottom: 2px solid black;
		font-size: 22px;
	}
`;

const navbarItems = {
	home: { url: '/', content: 'Take me back to Activites' },
};

const NavbarItem = (props) => {
	return (
		<Link to={props.url}>
			<NavbarLinkStyle>{props.content}</NavbarLinkStyle>
		</Link>
	);
};

const NavbarListItems = () =>
	Object.keys(navbarItems).map((item) => {
		const { url, content } = navbarItems[item];
		return <NavbarItem key={item} url={url} content={content} />;
	});

export default NavbarListItems;
