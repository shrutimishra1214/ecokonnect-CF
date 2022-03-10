import React from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import HomeNavBar from '../../Navbar/home-navbar';
// import InformationImg from '../../../assets/bg_informationPage1.jpg';

// import '../../Home/style/HomeNavBar.css';

const HomeNavBarWrapper = styled.div`
	position: absolute;
	height: 2em;
	width: 100vw;
	top: 0;
	left: 0;
`;

const InformationWrapper = styled.div`
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

export const Information = () => {
	return (
		<>
			{/* <HomeNavBarWrapper>
				<HomeNavBar />
			</HomeNavBarWrapper>
			<InformationWrapper>
				<Title>Información</Title>
				<TextWrapper>
					<TextLeft>
						La huella de carbono representa el impacto que tiene sobre el clima el desarrollo de una
						actividad, y mide la cantidad de gases de efecto invernadero que emitimos a la atmósfera. Nuestra
						calculadora de huella de carbono puede utilizarse para personas y organizaciones.
						<br />
						<br />
						La heulla de carbono se divide en Alcance 1, 2 y 3. La mayor parte de todas las emisiones de CO2
						tienen que ver con el consumo de energía: electricidad, gas y combustibles. Dicho esto, existen
						grandes diferencias en el nivel de emisiones contaminantes, o lo que es lo mismo, entre las
						huellas que dejan unos y otros, en función del uso de vehículos, los consumos de energía, o el
						grado de reciclaje.
						<br />
						<br />
						El primer paso para minimizar nuestra huella de carbono es sin duda conocerla, para poder así
						plantearnos el reducirla. Si tu duda es cómo puedes calcular tu huella de carbono para conocer
						cuántos gases de efecto invernadero emites, puedes echar mano de nuestra calculadora interactiva.
						¡Es muy sencilla!
						<br />
						<AboutImage src={InformationImg} />
					</TextLeft>
				</TextWrapper>
			</InformationWrapper> */}
		</>
	);
};
