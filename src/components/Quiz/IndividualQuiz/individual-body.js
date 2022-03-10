import React, { useCallback } from 'react';
import styled from 'styled-components';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import QuizBodySimple from './quiz-body-simple';
import QuizBodyComplex from './quiz-body-complex';
import FormCheck from './form-check';

const InputBox = styled.div`
	background-color: white;
	border-radius: 10px;
	width: 100%;
	min-width: 43vw;
	${({ theme }) =>
		theme.query.bigDesktop({
			'min-width': '47vw',
		})}
	${({ theme }) =>
		theme.query.desktop({
			'min-width': '63vw',
		})}
	${({ theme }) =>
		theme.query.smallDesktop({
			'min-width': '77vw',
		})}
	${({ theme }) =>
		theme.query.bigMobile({
			'min-width': '87vw',
		})}
	height: ${(props) => (props.quizType ? '30vh' : '45vh')};
	padding: 0 0.5em;
	overflow-y: hidden;
	overflow-y: scroll;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	box-shadow: 9px 9px 14px -13px rgba(138, 138, 138, 1);
	&::-webkit-scrollbar-thumb {
		border-radius: 4px;
		background-color: rgba(0, 0, 0, 0.5);
		box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
	}
	${({ theme }) =>
		theme.query.bigMobile({
			'margin-bottom': '2em',
			width: 'auto',
		})}

	&.expand-enter {
		transform: rotateY(-90deg);
	}
	&.expand-enter-active {
		transform: rotateY(0deg);
		transform-style: preserve-3d;
		transition: transform 600ms, opacity 1000ms;
	}
	&.expand-exit {
		transform: rotateY(0deg);
	}
	&.expand-exit-active {
		transform: rotateY(90deg);
		transform-style: preserve-3d;
		transition: transform 600ms, opacity 1000ms;
	}
`;

const QuizIndividualState = ({ state, handleSlider, handleInput, quizType }) => {
	if (quizType) return <QuizBodySimple state={state} handleSlider={handleSlider} />;
	return <QuizBodyComplex state={state} handleInput={handleInput} />;
};

const QuizBody = ({ state, dispatch }) => {
	const { questionIndex } = state;
	let { quizType, changeState } = state.quizData[questionIndex];

	const handleSlider = useCallback((e, name) => {
		const { value } = e.target;
		dispatch({ type: name, value: value });
	});

	const handleInput = useCallback((e) => {
		const { name, value } = e.target;
		dispatch({ type: 'quizInput', name: name, value: value });
	});

	const handleQuizState = useCallback(() => {
		dispatch({ type: 'quizState', payload: quizType });
	});

	return (
		<div style={{ perspective: '1200px' }}>
			<SwitchTransition mode='out-in'>
				<CSSTransition
					key={quizType}
					timeout={600}
					addEndListener={(node, done) => {
						node.addEventListener('transitionend', done, true);
					}}
					classNames='expand'>
					<InputBox quizType={quizType}>
						<QuizIndividualState
							state={state}
							handleSlider={handleSlider}
							handleInput={handleInput}
							quizType={quizType}
						/>
						<FormCheck handleQuizState={handleQuizState} changeState={changeState} quizType={quizType} />
					</InputBox>
				</CSSTransition>
			</SwitchTransition>
		</div>
	);
};

export default QuizBody;
