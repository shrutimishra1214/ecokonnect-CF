import React from 'react';
import styled from 'styled-components';

const SliderTextWrapper = styled.div`
	display: flex;
	padding: 0.5em 0;
`;

const SliderTextStyle = styled.div`
	font-family: 'Heebo', sans-serif;
	font-size: 18px;
	font-weight: 500;
	padding: 0 0.5em;
`;

const SliderSubTextStyle = styled.div`
	font-family: 'Heebo', sans-serif;
	font-size: 15px;
	padding: 0 0.5em;
`;

const SliderText = ({ value }) => {
	let frecuency;
	let ratio;

	switch (value) {
		case '0':
			frecuency = 'Never';
			ratio = '( x0 )';
			break;
		case '2':
			frecuency = 'Occasionally';
			ratio = '( x1/3 )';
			break;
		case '4':
			frecuency = 'Normal';
			ratio = '( x1 )';
			break;
		case '6':
			frecuency = 'Frequently';
			ratio = '( x1,5 )';
			break;
		case '8':
			frecuency = 'Very Often';
			ratio = '( x3 )';
			break;
		case '10':
			frecuency = 'Always';
			ratio = '( x5 )';
			break;
		default:
			frecuency = 'Error';
			ratio = '( x0 )';
	}

	return (
		<SliderTextWrapper>
			<SliderTextStyle>{frecuency} </SliderTextStyle>
			<SliderSubTextStyle> {ratio}</SliderSubTextStyle>
		</SliderTextWrapper>
	);
};

export default SliderText;
