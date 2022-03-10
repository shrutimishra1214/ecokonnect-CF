import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import ButtonComponent from './button-component';
import HeroText from './hero-text';

const ButtonBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	margin: auto;
	padding-top: 2em;
	${({ theme }) =>
		theme.query.desktop({
			display: 'grid',
			'align-items': 'center',
			'justify-content': 'center',
			'padding-top': '0',
		})}
`;

const HeroBody = () => {
	return (
		<>
			<HeroText>Select the type of carbon footprint calculation</HeroText>
			<ButtonBox>
				<Link to='/quiz/person'>
					<ButtonComponent content={'Individual'} />
				</Link>
				<Link to='/quiz/organization'>
					<ButtonComponent content={'Small Organization'} />
				</Link>
			</ButtonBox>
		</>
	);
};

export default HeroBody;
