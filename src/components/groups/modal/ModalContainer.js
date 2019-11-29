import React from 'react';
import styled from 'styled-components';

const StyledModal = styled.div`
    padding: 8px;
    margin: 8px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid grey;
    background-color: white;
    z-index: 999;

`;

class ModalContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasOpened: true
        }
    }
    
    render () {
        const { children, hasOpened } = this.props;

        return (hasOpened ? <StyledModal>{children}</StyledModal> : null);
    }
}

export default ModalContainer;