import React from 'react';
import styled from 'styled-components';

const BarContainer = styled.div`
    width: 100px;
    height: 20px;
    background-color: black;
    border: 1px solid black;
`;

const CurrentProgressBar = styled.div`
    background-color: ${props => props.barBg};
    width: ${props => props.progress}px;
    height: 20px;
`;

const ProgressBar = ({ barBg, progress }) => {
    return (
        <BarContainer>
            <CurrentProgressBar 
                barBg={barBg}
                progress={progress}
            />
        </BarContainer>
    );
}

export default ProgressBar;

