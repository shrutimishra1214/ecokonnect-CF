import React from 'react';
import styled from 'styled-components';

import Title from './intro-title';

const IntroWrapper = styled.div`
	background: -webkit-linear-gradient(#ebece7, #fff);
	background: linear-gradient(#ebece7, #fff);
	margin: 0;
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Intro = ({ handleIntro }) => {
	return (
		<IntroWrapper>
			<Title handleIntro={handleIntro} />
		</IntroWrapper>
	);
};

export default Intro;
