import React from 'react';
import styled from 'styled-components';

const BarContainer = styled.div`
    width: 100px;
    padding: 10px 0;
    background-color: green;
`;

const CurrentProgressBar = styled.div`

`;

const ProgressBar = ({ bg, progress }) => {
    return (
        <BarContainer>
            <CurrentProgressBar bg={bg} progress={progress} />
        </BarContainer>
    );
}

export default ProgressBar;

