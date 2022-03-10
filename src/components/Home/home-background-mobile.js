import React from 'react';
import styled from 'styled-components';
import tree from '../../assets/bg_home.svg';
import BirdAnimation from './bird-animation';

const BgImg = styled.img`
	width: 30em;
	padding-left: 2em;
	@media only screen and (max-width: 1000px) {
		width: 24em;
		padding-left: 2em;
	}
	@media only screen and (max-width: 800px) {
		width: 14em;
		padding-left: 0em;
	}
	@media only screen and (max-width: 500px) {
		width: 12em;
		padding-left: 0em;
	}
	@media only screen and (max-width: 350px) {
		width: 8em;
	}
`;

const MobileHomeBackground = () => {
	return (
		<>
			<BgImg src={tree} alt='tree' />
			<BirdAnimation />
		</>
	);
};

export default MobileHomeBackground;
