import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import Navbar from '../../Navbar/navbar';
// import AboutImg from '../../../assets/bg_aboutPage.jpg';
// import AboutImg2 from '../../../assets/bg_aboutPage2.jpg';

// import '../../Home/style/HomeNavBar.css';

const HomeNavBarWrapper = styled.div`
	position: absolute;
	height: 2em;
	width: 100vw;
	top: 0;
	left: 0;
`;

const AboutWrapper = styled.div`
	width: 60vw;
	text-align: left;
	margin: auto;
	margin-top: 20vh;
	margin-bottom: 10vh;
	padding: 1em 2em;
	box-shadow: 0px 1px 1px rgba(10, 10, 10, 0.1), 0px 1px 2px rgba(10, 10, 10, 0.1),
		0px 0px 1px rgba(10, 10, 10, 0.8);
	box-shadow: var(
		--theme-container-box-shadow,
		0px 1px 1px rgba(10, 10, 10, 0.1),
		0px 1px 2px rgba(10, 10, 10, 0.1),
		0px 0px 1px rgba(10, 10, 10, 0.8)
	);
	@media (max-width: 550px) {
		width: 85vw;
		margin-top: 15vh;
	}
`;

const Title = styled.h1`
	color: black;
`;

const TextWrapper = styled.div``;

const TextLeft = styled.h4`
	color: black;
	padding-right: 20vw;
	font-size: 20px;
	font-weight: 500;
	padding-top: 0;
	margin-top: 0;
	position: relative;
	@media (max-width: 1200px) {
		padding-right: 25vw;
	}
	@media (max-width: 550px) {
		padding: 0;
	}
`;

const TextRigth = styled.h4`
	color: black;
	padding-left: 23vw;
	font-size: 20px;
	font-weight: 500;
	padding-top: 0;
	margin-top: 0;
	position: relative;
	@media (max-width: 1200px) {
	}
	@media (max-width: 550px) {
		padding: 0;
	}
`;

const AboutImage = styled.img`
	width: 15em;
	position: absolute;
	right: -3em;
	top: -2em;
	border-radius: 10px;
	-webkit-box-shadow: 21px 21px 69px -40px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: 21px 21px 69px -40px rgba(0, 0, 0, 0.75);
	box-shadow: 21px 21px 69px -40px rgba(0, 0, 0, 0.75);
	@media (max-width: 1200px) {
		top: -1em;
	}
	@media (max-width: 550px) {
		display: none;
	}
`;

const AboutImage2 = styled.img`
	width: 15em;
	position: absolute;
	left: -3em;
	top: 0em;
	border-radius: 10px;
	-webkit-box-shadow: -25px 21px 69px -40px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: -25px 21px 69px -40px rgba(0, 0, 0, 0.75);
	box-shadow: -25px 21px 69px -40px rgba(0, 0, 0, 0.75);
	@media (max-width: 1200px) {
		top: 2em;
	}
	@media (max-width: 550px) {
		display: none;
	}
`;

export const About = ({ handleMenu }) => {
	return (
		<>
			{/* <HomeNavBarWrapper>
				<Navbar />
			</HomeNavBarWrapper>
			<AboutWrapper>
				<Title>Acerca</Title>
				<TextWrapper>
					<TextLeft>
						Esta es una calculadora de la huella de carbono y de agua. El propósito de esta calculadora es
						crear conciencia sobre nuestros hábitos de consumo y sobre cómo nuestras acciones como personas
						individuales impactan el mundo.
						<br />
						<br />
						Esta calculadora puede calcular la huella de Carbono de un negocio o de personas individuales.
						También puede calcular la huella Hídrica de personas individuales.
						<br />
						<br />
						<br />
						<AboutImage src={AboutImg} />
					</TextLeft>
					<TextRigth>
						En algunas preguntas, puede ingresar tus datos de consumo exactos o puede elegir ingresarlos más
						fácilmente con un control deslizante. Estos datos se obtienen del consumo medio de ciudadanos
						españoles proporcionado por los diferentes ministerios del gobierno español.
						<br />
						<br />
						Los factores de emisión en los que se basa la calculadora también se calculan y obtienen con
						respecto a los datos de España. Dado que su huella varía según el país en el que vive.
						<br />
						<br />
						Esta página está desarrollada por mí. Un estudiante de la Universidad de Burgos. Quién hizo esta
						página como mi proyecto final de grado.
						<AboutImage2 src={AboutImg2} />
					</TextRigth>
				</TextWrapper>
			</AboutWrapper> */}
		</>
	);
};
