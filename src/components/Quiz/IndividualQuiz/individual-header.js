import React from 'react';
import styled from 'styled-components';

const TitleWrapper = styled.div`
	text-transform: uppercase;
	display: flex;
	justify-content: center;
	color: #38a66d;
`;
const Tittle = styled.h1`
	font-size: 50px;
	font-weight: 600;
	margin-top: 1.5em;
	${({ theme, open }) =>
		theme.query.bigMobile({
			'margin-top': '0em',
			'margin-bottom': '0em',
		})}
`;

const ImageWrapper = styled.div`
	width: 100%;
	height: 25vh;
	margin-bottom: 1em;
	background: transparent;
	display: flex;
	justify-content: center;
	align-items: center;
	${({ theme }) =>
		theme.query.bigMobile({
			height: '25vh',
		})}
`;

const SimpleQuizImage = styled.img`
	height: 100%;
	background: transparent;
	display: block;
	@media (max-height: 650px) {
		width: 10em;
	}
`;

const QuizHeader = ({ state = {} }) => {
	const { quizData, questionIndex } = state;
	return (
		<>
			<TitleWrapper>
				<Tittle>{quizData[questionIndex].title}</Tittle>
			</TitleWrapper>
			<ImageWrapper>
				<SimpleQuizImage src={quizData[questionIndex].image} alt={quizData[questionIndex].title} />
			</ImageWrapper>
		</>
	);
};

export default QuizHeader;
