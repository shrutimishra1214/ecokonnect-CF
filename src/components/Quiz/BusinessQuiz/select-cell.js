import React from 'react';
import styled from 'styled-components';

const Selector = styled.select`
	width: 100%;
	margin: 0em 2em;
	font-size: medium;
	border-radius: 0.3em;
	text-align-last: center;
	text-align: center;
`;

const SelectCell = ({ dropdownOptions, rowItem, rowItemIndex }) => {
	return (
		<Selector key={rowItemIndex} name={rowItem}>
			{dropdownOptions[rowItem].map((dropdownOption, dropdownOptionKey) => {
				return (
					<option key={dropdownOptionKey} value={dropdownOption}>
						{dropdownOption}
					</option>
				);
			})}
		</Selector>
	);
};

export default SelectCell;
