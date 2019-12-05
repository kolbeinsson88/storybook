import React from 'react';
import styled from 'styled-components';

const Bar = styled.div`
    height: ${props => props.height}px;
    width: 100px;
    background-color: black;
    border: 1px solid white;
    color: grey;
    text-align: center;

    span {
        position: relative;
        top: 100%;
    }
`;

const HistogramBar = ({distribution, label}) => {
    return (
        <Bar height={distribution}>
            <span>{label}</span>
        </Bar>
    );
}

export default HistogramBar;