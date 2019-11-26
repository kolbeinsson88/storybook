import React from 'react';
import styled from '@emotion/styled';
import { COLOR } from '../../../styles/colors';

const StyledButton = styled.button`
    display: inline;
    padding: 9px;
    border-radius: 8px;

    border: 2px solid ${props => props.color};
    font-weight: 700px;
    font-size: 17px;
    background-color: white;
    font-weight: 600;

    margin: ${props => props.margin};

    &:hover {
        cursor: pointer;
        border: 2px solid ${props => props.hover};
    }

    &:active {
        cursor: pointer;
        border: 2px solid ${COLOR.IVORY_DARK};
    }

    &:focus {
        border: 2px solid ${COLOR.GREEN_DARK};
    }
`;

const Button = ({type, children, disabled, margin, onClick}) => {
    const typeToLower = type.toLowerCase();
    if (typeToLower === 'success') {
        return (
            <StyledButton 
                onClick={() => onClick()} 
                margin={margin} disabled={disabled} 
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

