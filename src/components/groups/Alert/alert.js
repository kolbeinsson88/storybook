import React from 'react';
import styled from 'styled-components';
import { COLOR } from '../../../styles/colors';


const AlertStyled = styled.div`
    padding: 24px;
    margin: 16px;
    border-radius: 8px;

    border: 1px solid green;
    background-color: ${props => props.bgColor};        

    &:disabled {
        color: grey;
        border: none;
    }
`;

const WrapperContainer = styled.div`
    padding: 4px;
    margin: 4px;
`;

const HeaderWrapper = styled.h3`
    margin: 4px 0 4px 0;
    padding: 8px 0;

    font-size: 32px;
    font-weight: 360;

    text-align: ${props => props.align};
`;


const AlertCollapsable = ({type, children}) => {
    let color = '';
    if (type === 'danger') {
        color = COLOR.FIREBRICK_LIGHT;
    } else if (type === 'success') {
        color = COLOR.GREEN_DARK;
    } else {
        color = COLOR.FIREBRICK_LIGHT;
    }

    return <AlertStyled bgColor={color}>{children}</AlertStyled>;
};

AlertCollapsable.primaryTitle = ({children, align = "start"}) => <HeaderWrapper align={align}>{children}</HeaderWrapper>;
AlertCollapsable.primaryContent = ({children}) => <WrapperContainer>{children}</WrapperContainer>;

export default AlertCollapsable;

