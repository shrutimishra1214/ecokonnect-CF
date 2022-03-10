import React from 'react';
import styled from 'styled-components';

const Tittle = styled.div`
	font-size: 42px;
	font-weight: 600;
	display: flex;
	justify-content: center;
	padding-left: 3vw;
	color: #38a66d;
`;

const Title2 = styled.div`
	font-size: 20px;
	font-weight: 300;
	display: flex;
	justify-content: center;
	padding-left: 3vw;
	@media (max-width: 810px) {
		padding-left: 0;
		padding: 1em;
	}
`;

const BuisnessHeader = ({ state }) => {
	const { title, title2 } = state.quizData[state.questionIndex];
	return (
		<>
			<Tittle>{title}</Tittle>
			<Title2>{title2}</Title2>
		</>
	);
};

export default BuisnessHeader;
