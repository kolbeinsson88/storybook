import React from 'react';
import styled from 'styled-components';

import { COLOR } from '../../../styles/colors';

const StyledToaster = styled.div`
    display: ${props => props.display ? 'flex' : 'none'};
    flex-direction: row;

    padding: 3px 35px;
    margin: 10px;
    background-color: ${COLOR.FIREBRICK_MEDIUM};
    z-index: -1;
    font-weight: 500;
    color: white;
    position: absolute;
    top: 20%;
    left: 45%;
    transform: translate(-50%, -50%);
`;

class Toaster extends React.Component {
    constructor(props) {
        super(props);
        this.state = { active: false };
    }

    componentDidMount() {
        const { active } = this.props;
        if(active) {
            this.setState({ display: true });
            setInterval(() => { this.setState({ display: false })}, 5000);
        }
    }

    render () {
        const { children } = this.props;
        const { display } = this.state;

        return (
            <StyledToaster display={display}>
                <p>{children}</p>
            </StyledToaster>);
    }
}

export default Toaster;
