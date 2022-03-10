import React, { useCallback } from 'react';
import styled from 'styled-components';

import { PlusCircle } from '@styled-icons/boxicons-solid';
import { MinusCircle } from '@styled-icons/boxicons-solid';

const MiddleBox = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 10em;
	margin: auto;
`;

const AddButton = styled.button`
	border: 0px solid transparent;
	cursor: pointer;
	background: transparent;
	svg {
		color: cornflowerblue;
		width: 50px;
		border-radius: 50%;
	}
`;
const DeleteButton = styled.button`
	border: 0px solid transparent;
	cursor: pointer;
	background: transparent;
	svg {
		color: #9b9b9b;
		width: 50px;
		border-radius: 50%;
	}
`;

const ButtonBox = styled.div``;

const ButtonText = styled.p`
	margin: 0;
	padding: 0;
`;

const ButtonRows = ({ dispatch }) => {
	const handleClick = useCallback((e) => {
		const { name } = e.currentTarget;
		dispatch({ type: name });
	});

	return (
		<MiddleBox>
			<ButtonBox>
				<DeleteButton name='deleteRow' onClick={handleClick}>
					<MinusCircle />
				</DeleteButton>
				<ButtonText>Delete Row</ButtonText>
			</ButtonBox>
			<ButtonBox>
				<AddButton name='addRow' onClick={handleClick}>
					<PlusCircle />
				</AddButton>
				<ButtonText>Add Row</ButtonText>
			</ButtonBox>
		</MiddleBox>
	);
};

export default ButtonRows;
