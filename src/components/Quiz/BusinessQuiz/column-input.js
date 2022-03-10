import React from 'react';
import styled from 'styled-components';

import TableCells from './table-cells';

const InputRowWrapper = styled.div`
	margin-top: 1em;
	width: inherit;
	border-top: 1px solid #6fce99;
	padding-top: 1em;
`;

const QuestionsOptionsWrapper = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	width: inherit;
`;

const ColumnInput = ({ state, handleInput }) => {
	const { rowStructure } = state;

	return rowStructure.map((row, rowIndex) => {
		return (
			<InputRowWrapper key={rowIndex}>
				<QuestionsOptionsWrapper>
					{Object.keys(row).map((rowItem, rowItemIndex) => {
						return (
							<TableCells
								key={rowItemIndex}
								state={state}
								row={row}
								rowIndex={rowIndex}
								rowItem={rowItem}
								rowItemIndex={rowItemIndex}
								handleInput={handleInput}
							/>
						);
					})}
				</QuestionsOptionsWrapper>
			</InputRowWrapper>
		);
	});
};

export default ColumnInput;
