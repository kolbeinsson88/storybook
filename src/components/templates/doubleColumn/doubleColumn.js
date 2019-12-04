import React from 'react';
import styled from 'styled-components';

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-gap: ${props => props.gap};
`;

const Grid = ({ gap, children }) => {    
    return (
        <StyledGrid gap={gap}>
            {children}
        </StyledGrid>
    )
};

export default Grid;
