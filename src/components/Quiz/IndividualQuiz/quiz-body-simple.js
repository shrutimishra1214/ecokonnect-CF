import React from 'react';
import styled from 'styled-components';

import SliderText from './slider-text';

// START SLIDER -------------------------------------------------------------------------------------------------------------------
const height = '16px';
const thumbHeight = 36;
const trackHeight = '16px';
// colours
const upperColor = '#888E92';
const thumbColor = 'white';
const thumbHoverColor = 'white';
const upperBackground = `linear-gradient(to bottom, ${upperColor}, ${upperColor}) 100% 50% / 100% ${trackHeight} no-repeat transparent`;
const lowerBackground = `linear-gradient(to right, #00f260, #0575e6)`;
// Webkit cannot style progress so we fake it with a long shadow on the thumb element
const makeLongShadow = (color, size) => {
	let i = 18;
	let shadow = `${i}px 0 0 ${size} ${color}`;
	for (; i < 706; i++) {
		shadow = `${shadow}, ${i}px 0 0 ${size} ${color}`;
	}
	return shadow;
};
const SliderInput = styled.input`
	overflow: hidden;
	display: block;
	appearance: none;
	max-width: 700px;
	border: 1px solid black;
	width: 100%;
	border-radius: 10px;
	height: ${height};
	cursor: pointer;
	&:focus {
		outline: none;
	}
	&::-webkit-slider-runnable-track {
		width: 100%;
		height: ${height};
		background: ${lowerBackground};
	}
	&::-webkit-slider-thumb {
		position: relative;
		appearance: none;
		height: ${thumbHeight}px;
		width: ${thumbHeight}px;
		background: ${thumbColor};
		border-radius: 100%;
		border: 1px solid black;
		border: 0;
		top: 50%;
		transform: translateY(-50%);
		box-shadow: ${makeLongShadow(upperColor, '-10px')};
		transition: background-color 150ms;
	}
	&::-moz-range-track,
	&::-moz-range-progress {
		width: 100%;
		height: ${height};
		background: ${upperBackground};
	}
	&::-moz-range-progress {
		background: ${lowerBackground};
	}
	&::-moz-range-thumb {
		appearance: none;
		margin: 0;
		height: ${thumbHeight};
		width: ${thumbHeight};
		background: ${thumbColor};
		border-radius: 100%;
		border: 1px solid black;
		border: 0;
		transition: background-color 150ms;
	}
	&::-ms-track {
		width: 100%;
		height: ${height};
		border: 0;
		/* color needed to hide track marks */
		color: transparent;
		background: transparent;
	}
	&::-ms-fill-lower {
		background: ${lowerBackground};
	}
	&::-ms-fill-upper {
		background: ${upperBackground};
	}
	&::-ms-thumb {
		appearance: none;
		height: ${thumbHeight};
		width: ${thumbHeight};
		background: ${thumbColor};
		border-radius: 100%;
		border: 1px solid black;
		transition: background-color 150ms;
		/* IE Edge thinks it can support -webkit prefixes */
		top: 0;
		margin: 0;
		box-shadow: none;
	}
	&:hover,
	&:focus {
		&::-webkit-slider-thumb {
			background-color: ${thumbHoverColor};
		}
		&::-moz-range-thumb {
			background-color: ${thumbHoverColor};
		}
		&::-ms-thumb {
			background-color: ${thumbHoverColor};
		}
	}
`;
// END SLIDER -----------------------------------------------------------------------------------------------------------------
const QuestionQuiz = styled.div`
	font-size: 25px;
	padding-top: 0.5em;
	padding-bottom: 0.5em;
	font-weight: 700;
	display: flex;
	justify-content: center;
	${({ theme }) =>
		theme.query.bigMobile({
			'font-size': '20px',
		})}
`;

const SliderWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const SliderBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 80%;
	${({ theme }) =>
		theme.query.bigMobile({
			width: '100%',
		})}
`;

const LeftText = styled.div`
	padding-right: 0.5em;
	font-family: 'Heebo', sans-serif;
`;

const RightText = styled.div`
	font-family: 'Heebo', sans-serif;
	padding-left: 0.5em;
`;

const QuizBodySimple = ({ state, handleSlider }) => {
	const value = state.quizData[state.questionIndex].simpleState.slider;
	const title2 = state.quizData[state.questionIndex].title2;

	return (
		<>
			<QuestionQuiz>{title2}</QuestionQuiz>
			<SliderWrapper>
				<SliderBox>
					<LeftText>Never</LeftText>
					<SliderInput
						type='range'
						name='slider'
						min='0'
						max='10'
						step='2'
						value={value}
						onChange={(e) => handleSlider(e, 'quizSlider')}
					/>
					<RightText>Always</RightText>
				</SliderBox>
				<SliderText value={value} />
			</SliderWrapper>
		</>
	);
};

export default QuizBodySimple;
