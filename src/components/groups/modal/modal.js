import React from 'react';
import styled from 'styled-components';
import { COLOR } from '../../../styles/colors';

const StylingHeader = styled.h1`
    text-align: center;
    font-size: 24px;
    padding: 10px 0;
    margin: 10px 0;
    font-weight: 650;
`;

const StylingBody = styled.div`
    font-size: 16px;
    padding: 8px;
`;

const StylingFooter = styled.footer`
    padding: 2px 0;
    margin: 2px 0;
    padding: 8px;
`;

const BodyContainer = styled.div`
    padding: 10px;
    margin: 10px;
    border: 1px solid ${COLOR.GRAY_LIGHT};

    width: 450px;
    color: grey;
`;

const ModalButton = styled.button`
    background-color: #080707;
    color: white;

    border-radius: 4px;
    padding: 8px 32px;
    margin: 12px 0;
    font-size: 15px;
    font-weight: 600;

    border: 1px solid ${COLOR.FIREBRICK_LIGHT};
    cursor: pointer;

    &:hover {
        border-radius: 1px solid ${COLOR.FIREBRICK_MEDIUM}; 
        background-color: #120509;
    }
    
    &:focus { 
        border-radius: 1px solid ${COLOR.FIREBRICK_DARK}; 
    }
`;


const Modal = ({children}) => <BodyContainer>{children}</BodyContainer>;
Modal.Title = ({children}) => <StylingHeader>{children}</StylingHeader>;
Modal.Body = ({children}) => <StylingBody>{children}</StylingBody>;
Modal.Footer = ({children}) => <StylingFooter>{children}</StylingFooter>;
Modal.Button = ({onClick, children}) => <ModalButton onClick={() => onClick()}>{children}</ModalButton>;


export default Modal;