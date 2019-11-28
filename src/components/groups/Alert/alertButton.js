import React from 'react';
import styled from 'styled-components';

import { COLOR } from '../../../styles/colors';

const StyledAlertButton = styled.button`
    border: none;
    color: white;
    border-radius: 4px;
    background-color: black;
    padding: 8px 16px;
    font-size: 13px;
    margin: 24px 32px 8px 86px;
    border: 1px solid ${COLOR.AZURE_DARK};

    cursor: pointer;
    text-transform: uppercase;
    &:hover { border-color: ${COLOR.AZURE_VERY_DARK}; }
    &:focus { border-color: ${COLOR.AZURE_LIGHT}; }
    &:disabled {
        cursor: not-allowed;
        background-color: ${COLOR.GRAY_LIGHT};
        border: none;
        color: ${COLOR.GRAY_MEDIUM};
        cursor: not-allowed;
    }
`;

const StyledAlert = ({onClick, type, children, disabled}) => {
    return <StyledAlertButton disabled={disabled} onClick={(e) => onClick(e)} type="success" >{children}</StyledAlertButton>;
};

export default StyledAlert;
