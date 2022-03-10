import React from 'react';
import styled from 'styled-components';
// import { Link, useParams } from 'react-router-dom';
// import Navbar from '../../Navbar/home-navbar';
// import bgImg from '../../../assets/bg_contribute.jpg';
// import ImgWWF from '../../../assets/contribute_img_1.jpg';
// import Oceans from '../../../assets/contribute_img_2.png';
// import Trees from '../../../assets/contribute_img_3.png';

// import '../../Home/style/HomeNavBar.css';

const HomeNavBarWrapper = styled.div`
	position: absolute;
	height: 10em;
	width: 100vw;
	top: 0;
	left: 0;
`;

const ImageWrapper = styled.div`
	position: relative;
	margin-top: 9em;
	width: 100%;
	height: 30vh;
	overflow: hidden;
	@media (max-width: 500px) {
		margin-top: 5em;
	}
`;

const BgImage = styled.img`
	position: absolute;
	width: 100%;
	right: 0;
	bottom: -45vh;
	@media (max-width: 1440px) and (max-height: 900px) {
		bottom: -40vh;
	}
	@media (max-width: 1280px) and (max-height: 950px) {
		bottom: -25vh;
	}
	@media (max-width: 1280px) and (max-height: 800px) {
		bottom: -35vh;
	}
	@media (max-width: 1292px) and (max-height: 641px) {
		bottom: -47vh;
	}
	@media (max-width: 1200px) {
		bottom: -35vh;
	}
	@media (max-width: 500px) {
		bottom: 1vh;
	}
`;

const ContributeWrapper = styled.div`
	position: absolute;
	right: 0;
	top: 4vh;
	width: 38vw;
	text-align: left;
	padding-right: 0vw;
	@media (max-width: 1292px) and (max-height: 641px) {
		top: 1vh;
	}
	@media (max-width: 1200px) {
		top: 1vh;
	}
	@media (max-width: 1100px) {
		top: 1vh;
	}
	@media (max-width: 550px) {
		top: 19vh;
		width: 100%;
		text-align: center;
	}
	@media (max-width: 350px) {
		top: 17vh;
		width: 100%;
		text-align: center;
	}
`;

const Title = styled.h1`
	color: black;
	text-transform: uppercase;
	padding: 0;
	margin: 0;
	font-size: 40px;
	font-family: 'Paytone One', sans-serif;
	@media (max-width: 550px) {
		font-size: 25px;
	}
	@media (max-width: 380px) {
		font-size: 20px;
	}
	@media (max-width: 350px) {
		font-size: 19px;
	}
`;

const BoxCard = styled.div`
	margin-top: 5vh;
	margin-bottom: 5vh;
	margin: 5vh 10vh;
	margin-bottom: 10vh;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	position: relative;
	@media (max-width: 1100px) {
		margin: 5vh 2vh;
	}
	@media (max-width: 500px) {
		display: grid;
	}
`;

const Card = styled.div`
	color: black;
	width: 20vw;
	height: 45vh;
	background: #e6e6e6;
	@media (max-width: 1440px) and (max-height: 900px) {
		width: 25vw;
		height: 40vh;
	}
	@media (max-width: 1440px) and (max-height: 800px) {
		width: 25vw;
		height: 45vh;
	}
	@media (max-width: 1280px) and (max-height: 950px) {
		width: 25vw;
		height: 36vh;
	}
	@media (max-width: 1280px) and (max-height: 800px) {
		width: 25vw;
		height: 40vh;
	}
	@media (max-width: 1292px) and (max-height: 641px) {
		width: 22vw;
		height: 43vh;
	}
	@media (max-width: 1200px) {
		width: 25vw;
		height: 40vh;
	}
	@media (max-width: 1100px) {
		width: 30vw;
		height: 41vh;
	}
	@media (max-width: 500px) {
		width: 82vw;
		height: 41vh;
		margin-bottom: 2em;
	}
`;

const ImgCardWrapper = styled.div`
	width: 100%;
	height: 80%;
`;

const ImgCard = styled.img`
	width: 100%;
	border: 1px solid #e6e6e6;
`;

const ButtonWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`;

const ButtonCard = styled.button`
	width: 7em;
	padding: 0.5em 0;
	font-size: 18px;
	background: #f99734;
	border: none;
	&:hover {
		cursor: pointer;
	}
`;

export const Contribute = () => {
	return (
		<>
			{/* <HomeNavBarWrapper>
				<Navbar />
			</HomeNavBarWrapper>
			<ImageWrapper>
				<BgImage src={bgImg} />
				<ContributeWrapper>
					<Title>Puedes Contribuir Donando a las siguientes paginas:</Title>
				</ContributeWrapper>
			</ImageWrapper>
			<BoxCard>
				<Card>
					<ImgCardWrapper>
						<ImgCard src={Trees} />
					</ImgCardWrapper>
					<ButtonWrapper>
						<Link to='/contribute/tree'>
							<ButtonCard>Visitar</ButtonCard>
						</Link>
						<Link to='/contribute/tree'>
							<ButtonCard>Donar</ButtonCard>
						</Link>
					</ButtonWrapper>
				</Card>
				<Card>
					<ImgCardWrapper>
						<ImgCard src={ImgWWF} />
					</ImgCardWrapper>
					<ButtonWrapper>
						<Link to='/contribute/wwf'>
							<ButtonCard>Visitar</ButtonCard>
						</Link>
						<Link to='/donate/wwf'>
							<ButtonCard>Donar</ButtonCard>
						</Link>
					</ButtonWrapper>
				</Card>
				<Card>
					<ImgCardWrapper>
						<ImgCard src={Oceans} />
					</ImgCardWrapper>
					<ButtonWrapper>
						<Link to='/contribute/oceans' target='_blank'>
							<ButtonCard>Visitar</ButtonCard>
						</Link>
						<Link to='/donate/oceans'>
							<ButtonCard>Donar</ButtonCard>
						</Link>
					</ButtonWrapper>
				</Card>
			</BoxCard> */}
		</>
	);
};
