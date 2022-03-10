import React from 'react';
import styled from 'styled-components';

const TextStyle = styled.h2`
	text-align: center;
	color: ${(props) => props.theme.colors.secondary};
	font-weight: 700;
	font-size: 20px;
	padding-top: 2em;
	margin-bottom: 0;
	${({ theme }) =>
		theme.query.desktop({
			'font-size': '18px',
			'margin-bottom': '1em',
		})}
	${({ theme }) =>
		theme.query.bigMobile({
			'font-size': '15px',
			'margin-bottom': '1em',
		})}
	${({ theme }) =>
		theme.query.smallMobile({
			'font-size': '12px',
			'margin-bottom': '1em',
		})}
`;

const HeroText = ({ children }) => {
	return <TextStyle>{children}</TextStyle>;
};

export default HeroText;
