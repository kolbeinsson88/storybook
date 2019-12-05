import React from 'react';
import styled from 'styled-components';
import { COLOR } from '../../../styles/colors';

const BadgeWrapper = styled.div`
  padding: ${props  => props.size ? "4px 8px" : "8px 16px" }; 
  border-radius: 16px;

  background-color: ${props => props.color};
  width: fit-content;
  color: white;
  text-transform: uppercase;
`;

const Badge = ({
    variant = "success", 
    children, 
    size = "large"
}) => {
    if(size === "small") {
        
        if(variant === "info") {
            return( 
                <BadgeWrapper 
                    size 
                    color={COLOR.STEEL_BLUE_DARK} 
                    variant={variant}
                >
                {children}
                </BadgeWrapper>
            );
        }
        else if(variant === "danger") {
            return (
                <BadgeWrapper 
                    size 
                    color={COLOR.FIREBRICK_DARK} 
                    variant={variant}
                >
                {children}
                </BadgeWrapper>
            );
        }
        else if(variant === "success") {
            return (
                <BadgeWrapper 
                    size 
                    color={COLOR.GREEN_DARK} 
                    variant={variant}
                >
                    {children}
                </BadgeWrapper>
            );
        }

    } else if(size === "large") {

        if(variant === "info") {
            return (
                <BadgeWrapper 
                    color={COLOR.STEEL_BLUE_DARK} 
                    variant={variant}
                >
                    {children}
                </BadgeWrapper>
            )
        }
        else if(variant === "danger") {
            return (
                <BadgeWrapper 
                    color={COLOR.FIREBRICK_DARK} 
                    variant={variant}
                >
                    {children}
                </BadgeWrapper>
            );
        }
        else if(variant === "success") {
            return (
                <BadgeWrapper 
                    color={COLOR.GREEN_DARK} 
                    variant={variant}
                >
                    {children}
                </BadgeWrapper>
            );
        }
    }
    return (
        <BadgeWrapper 
            size={size} 
            color={COLOR.GREEN_DARK} 
            variant={variant}
        >
            {children}
        </BadgeWrapper>
    )
};

export default Badge;
