import React from 'react';
import styled from 'styled-components';

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: 6fr 1fr;
    grid-column-gap: 25px;
`;

const AsideContent = ({ asideSize }) => {
    return (
        <StyledGrid aside={asideSize} >
            <div>One</div>
            <div>Two</div>
        </StyledGrid>
    );
}

export default AsideContent;