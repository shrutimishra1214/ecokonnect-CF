import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
	background: transparent;
	backdrop-filter: blur(2px);
	padding: 8px;
	font-size: 20px;
	border: 2px solid;
	border-radius: 5px;
	font-weight: 500;
	text-transform: uppercase;
	transition: background-color 1s ease;
	color: white;
	border-color: white;
	background: forestgreen;
	z-index: 0;
	transition: all 300ms;
	&:hover {
		cursor: pointer;
		transform: scale(1.1);
	}
	@media only screen and (max-width: 950px) {
		width: 14em;
		padding: 0.6em;
		margin: 0.3em;
		font-size: 16px;
	}
	@media only screen and (max-width: 500px) {
		font-size: 15px;
	}
`;

const ButtonComponent = ({ content }) => {
	return <Button>{content}</Button>;
};

export default ButtonComponent;
