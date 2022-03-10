import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
	background: #90ee9052;
	border: none;
	border-bottom: 2px solid lightgreen;
	border-radius: 0.5em;
	height: 3em;
	width: 100%;
	margin: 0em 2em;
	text-align: center;
	font-weight: 600;
	font-size: 15px;
	&:focus {
	}
`;

const InputCell = ({ rowIndex, rowItem, rowItemIndex, placeHolder, handleInput, savedValue }) => {
	return (
		<Input
			type='text'
			key={rowItemIndex}
			data-row={rowIndex}
			name={rowItem}
			onChange={handleInput}
			value={savedValue[rowIndex][rowItem]}
			placeholder={placeHolder[rowItem]}
		/>
	);
};

export default InputCell;
