import React, { useCallback } from 'react';
import styled from 'styled-components';

import ColumnTitle from './column-title';
import ColumnInput from './column-input';

const TableBox = styled.div`
	background-color: white;
	border-radius: 10px;
	padding-bottom: 1em;
	margin-left: 1vw;
	-webkit-box-shadow: 5px 3px 31px -10px rgba(0, 0, 0, 0.66);
	-moz-box-shadow: 5px 3px 31px -10px rgba(0, 0, 0, 0.66);
	box-shadow: 5px 3px 31px -10px rgba(0, 0, 0, 0.66);
	@media (max-width: 810px) {
		padding: 1em;
	}
`;

const BuisnessBody = ({ state, dispatch }) => {
	const { columnTitle } = state.quizData[state.questionIndex];

	const handleInput = useCallback((e) => {
		const { name, value, dataset } = e.target;
		dispatch({ type: 'handleInput', name: name, value: value, row: dataset.row });
	});

	return (
		<TableBox>
			<ColumnTitle columnTitle={columnTitle} />
			<ColumnInput state={state.quizData[state.questionIndex]} handleInput={handleInput} />
		</TableBox>
	);
};

export default BuisnessBody;
