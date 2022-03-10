import React, { useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

import Background from '../../assets/titlebg.jpg';

const Container = styled.div`
	width: 90vw;
	background: transparent;
`;

const TitleStyle = styled.div`
	font-weight: 800;
	color: transparent;
	font-size: 160px;
	font-family: ${(props) => props.theme.fontFamily.title2};
	background: url(${Background});
	background-repeat: repeat;
	background-size: 770px;
	background-position: 50% 40%;
	-webkit-background-clip: text;
	position: relative;
	text-align: center;
	line-height: 120px;
	letter-spacing: -14px;
	@media only screen and (max-height: 650px) {
		font-size: 135px;
	}
	@media only screen and (max-width: 1200px) {
		font-size: 140px;
		line-height: 110px;
		letter-spacing: -14px;
	}
	@media only screen and (max-width: 850px) {
		font-size: 120px;
		line-height: 97px;
		letter-spacing: -12px;
	}
	@media only screen and (max-width: 710px) {
		font-size: 100px;
		line-height: 85px;
		letter-spacing: -10px;
	}
	@media only screen and (max-width: 600px) {
		font-size: 70px;
		line-height: 53px;
		-webkit-letter-spacing: -7px;
		-moz-letter-spacing: -7px;
		-ms-letter-spacing: -7px;
		letter-spacing: -7px;
		background-size: 346px;
	}
	@media only screen and (max-width: 400px) {
		font-size: 61px;
		line-height: 46px;
		letter-spacing: -7px;
		background-size: 300px;
	}
	@media only screen and (max-width: 350px) {
		font-size: 54px;
		line-height: 43px;
	}
`;

const Subtitle = styled.h3`
	display: block;
	text-align: center;
	text-transform: uppercase;
	color: black;
	padding-top: 0.5em;
	@media only screen and (max-height: 650px) {
		font-size: 16px;
	}
	@media only screen and (max-width: 1200px) {
		padding-top: 0;
		font-size: 16px;
	}
	@media only screen and (max-width: 850px) {
		padding-top: 0;
		font-size: 14px;
	}
	@media only screen and (max-width: 600px) {
		padding-top: 1em;
		font-size: 12px;
	}
`;

const ButtonWrapper = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 2em;
`;

const Button = styled.button`
	border: none;
	display: block;
	text-align: center;
	cursor: pointer;
	text-transform: uppercase;
	outline: none;
	overflow: hidden;
	position: relative;
	color: #fff;
	font-weight: 700;
	font-size: 18px;
	background-color: #222;
	padding: 17px 60px;
	margin: 0 auto;
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
	@media only screen and (max-width: 850px) {
		padding: 12px 40px;
	}
	@media only screen and (max-width: 600px) {
		padding: 12px 25px;
	}
	@media only screen and (max-width: 400px) {
		padding: 8px 13px;
	}
	&:after {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		height: 490%;
		width: 150%;
		background: #03b554;
		-webkit-transition: all 1s ease-in-out;
		transition: all 1s ease-in-out;
		-webkit-transform: translateX(-82%) translateY(-25%) rotate(45deg);
		transform: translateX(-82%) translateY(-25%) rotate(45deg);
	}
	&:hover {
		&:after {
			-webkit-transform: translateX(-9%) translateY(-25%) rotate(45deg);
			transform: translateX(-9%) translateY(-25%) rotate(45deg);
		}
	}
`;

const ButtonSpan = styled.span`
	position: relative;
	z-index: 1;
`;

const Title = ({ handleIntro }) => {
	const titleRef = useRef();

	const handleMouseMove = (e) => {
		const mouseX = e.pageX;
		const mouseY = e.pageY;
		const traX = (8 * mouseX) / 570 + 40;
		const traY = (8 * mouseY) / 570 + 50;
		titleRef.current.style.backgroundPosition = traX + '%' + traY + '%';
	};

	return (
		<Container onMouseMove={handleMouseMove}>
			<TitleStyle ref={titleRef}>
				CALCULATE <br /> YOUR <br /> CARBON <br /> FOOTPRINT <br />
			</TitleStyle>
			<Subtitle>Do you wanna know if you pollute more or less than the average? ClicK Start!</Subtitle>
			<ButtonWrapper onClick={handleIntro}>
				<Button>
					<ButtonSpan>Start Calculation</ButtonSpan>
				</Button>
			</ButtonWrapper>
		</Container>
	);
};

export default Title;
