import React from 'react';
import styled from 'styled-components';

const Text = ({ children, fontSize }) => {
	const StyledWrapper = createStyledWrapper(fontSize);
    
	return (
		<StyledWrapper>
			{children}
		</StyledWrapper>
	)
}

const createStyledWrapper = fontSize =>
    styled.h1`
			color: white;
			font-family: Arial, Helvetica, sans-serif;
			text-shadow: -9px 6px 4px #000000;
			font-size: ${fontSize}px;
    `;

export default Text;