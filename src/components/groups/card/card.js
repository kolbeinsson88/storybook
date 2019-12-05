import React from 'react';
import styled from 'styled-components';

import { COLOR } from '../../../styles/colors';

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;

    border: 1px solid ${COLOR.GRAY_LIGHT};
    box-shadow: 0.5px 0.5px ${COLOR.GRAY_LIGHT};
    width: 250px;
        
    font-weight: 800;
    letter-spacing: 2px;
    font-size: 16px;
`;

const StyledImage = styled.div`
    width: auto;
    height: 200px;
    background-image: url('https://images.unsplash.com/photo-1573021943124-1893c9bc12dd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9');

    background-origin: content-box;
    background-position: center;
    background-repeat: no-repeat;
`;

const CardButton = styled.button`
    padding: 8px 24px;
    margin: 8px;
    border-radius: 8px;

    width: fit-content;
    background-color: ${COLOR.STEEL_BLUE_LIGHT};
    color: white;
    border: 1px solid ${COLOR.STEEL_BLUE_LIGHT};

    cursor: pointer;
    &:hover { background-color: ${COLOR.ALBANY_PAINT_BLUE_MOUNTAIN};}
`;

const Card = ({img, children, title}) => {
    return (
        <StyledCard>
            <StyledImage img={img} />
            <p style={{padding: '0 8px'}}>{children}</p>
            <CardButton>{title}</CardButton>
        </StyledCard>
    )
};

export default Card;

