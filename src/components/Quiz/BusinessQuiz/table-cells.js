import React from 'react';
import styled from 'styled-components';

import SelectCell from './select-cell';
import InputCell from './input-cell';

const TableCells = ({ state, row, rowIndex, rowItem, rowItemIndex, handleInput }) => {
	const { dropdownOptions, placeHolder, savedValue } = state;

	if (row[rowItem] === 'dropdown')
		return <SelectCell dropdownOptions={dropdownOptions} rowItem={rowItem} rowItemIndex={rowItemIndex} />;

	return (
		<InputCell
			rowIndex={rowIndex}
			handleInput={handleInput}
			rowItem={rowItem}
			rowItemIndex={rowItemIndex}
			placeHolder={placeHolder}
			savedValue={savedValue}
		/>
	);
};

export default TableCells;
