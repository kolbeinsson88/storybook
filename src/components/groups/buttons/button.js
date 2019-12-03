import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { COLOR } from '../../../styles/colors';


const Disabled = css`
      &:disabled {
        background-color: #f1f1f1;
        color: black;
        border: none;
        cursor: not-allowed;
        padding: 11px;
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
    padding: 7px 40px;
    border-radius: 18px;
    border: none;
    font-size: 17px;
    font-weight: 400;
    text-transform: uppercase;

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

const StyledButtonSearch = styled.button`
    padding: 5px 25px;
    border-radius: 4px;
    border: none;
    
    font-size: 15px;
    font-weight: 400px;
    text-transform: 500px;

    background-color: black;
    border-color: black;
    color: white;

    margin: 0 ${props => props.margin};

    ${Disabled}
`;

const Button = ({type = "main", children, disabled, margin, onClick}) => {

    if (type === 'main') {
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
    if (type === 'success') {
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
    if (type === 'search') {
        return (
            <StyledButtonSearch
                disabled={disabled}
                onClick={() => onClick()}
                margin={margin}
                color={COLOR.GREEN_DARK}
            >
                {children}
            </StyledButtonSearch>
        );
    }
    if (type === 'danger') {
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
    if (type === 'info') {
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

