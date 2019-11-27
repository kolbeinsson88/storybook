import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { COLOR } from '../../../styles/colors';


const Disabled = css`
      &:disabled {
        background-color: ${COLOR.GRAY_LIGHT};
        color: black;
        border: 1px solid black;;
        cursor: not-allowed;
    }
`;


const StyledButton = styled.button`
    display: inline;
    padding: 9px;
    border-radius: 8px;

    border:1px solid ${props => props.color};
    font-weight: 400;
    font-size: 17px;
    background-color: white;

    margin: ${props => props.margin};

    cursor: pointer;

    &:hover {
        border: 2px solid ${props => props.hover};
    }

    &:active {
        border: 2px solid ${COLOR.IVORY_DARK};
    }

    &:focus {
        border: 2px solid ${COLOR.GREEN_DARK};
    }

    ${Disabled}
`;

const StyledMain = styled.button`
    padding: 7px 32px;
    border-radius: 18px;
    border: none;
    font-size: 19px;
    font-weight: 500;

    font-family: 'BenchNine', sans-serif;
    cursor: pointer;
    color: white;
    background-color: ${COLOR.GREEN_DARK};

    &:focus {
        border: 1px solid green;
    }

    &:active {
        border: 1px solid black;
    }

    &:hover {
        transform: scale(1.05);
    }
    
    ${Disabled}
`;

const Button = ({type, children, disabled, margin, onClick}) => {
    const typeToLower = type.toLowerCase();
    if (typeToLower === 'main')
    {
        return (
            <StyledMain 
                disabled={disabled}
                margin={margin}
                onClick={() => onClick()}
            >
                {children}
            </StyledMain>
        );
    }
    if (typeToLower === 'success') {
        return (
            <StyledButton 
                disabled={disabled}
                onClick={() => onClick()} 
                margin={margin}
                hover={COLOR.MEDIUM_SEA_GREEN} 
                color={COLOR.GREEN_DARK}
            >
                {children}
            </StyledButton>
        );
    }
    if (typeToLower === 'danger') {
        return (
            <StyledButton 
                onClick={() => onClick()} 
                margin={margin} 
                disabled={disabled} 
                hover={COLOR.FIREBRICK_LIGHT} 
                color={COLOR.FIREBRICK_DARK}
            >
            {children}
            </StyledButton>
        );
    }
    if (typeToLower === 'info') {
        return (
            <StyledButton 
                onClick={() => onClick()} 
                margin={margin} 
                disabled={disabled} 
                hover={COLOR.STEEL_BLUE_LIGHT} 
                color={COLOR.STEEL_BLUE_DARK}
            >
            {children}
            </StyledButton>
        );
    }
    return (
        <StyledButton 
            onClick={() => onClick()} 
            margin={margin} 
            disabled={disabled} 
            hover={COLOR.GRAY_MEDIUM} 
            color={COLOR.GRAY_DARK}
        >
        {children}
        </StyledButton>
    );
};

export default Button;

