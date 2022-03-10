import React from 'react';
import styled from 'styled-components';

const TitleWrapper = styled.div`
	margin-top: 1em;
	width: inherit;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	@media (max-width: 810px) {
		margin-top: 0em;
	}
`;

const TittleText = styled.div`
	font-size: 25px;
	padding-top: 20px;
	width: 100%;
	@media (max-width: 810px) {
		font-size: 20px;
		padding: 0.5em;
	}
	@media (max-width: 320px) {
		font-size: 18px;
		padding: 0.5em;
	}
`;

const Title = ({ columnTitle }) => {
	return Object.keys(columnTitle).map((title, index) => {
		return <TittleText key={index}>{columnTitle[title]}</TittleText>;
	});
};

const ColumnTitle = ({ columnTitle }) => {
	return (
		<TitleWrapper>
			<Title columnTitle={columnTitle} />
		</TitleWrapper>
	);
};

export default ColumnTitle;
