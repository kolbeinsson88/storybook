import React from 'react';
import styled from 'styled-components';

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

const StyledCarousel = styled.div`
    border: 1px solid black;
    background-image: url(${props => props.url});
    background-origin: center;
    background-position-y: bottom;
    width: 400px;
    height: 400px;
    position: relative;

    span {
        cursor: pointer;
        padding: 5px;
        margin-left: 3px;
        font-weight: 700;
        padding: 0 20px;
    }

    span:nth-child(1) {
        position: absolute;
        top: 50%;
        border: 1px solid grey;
        padding-top: 5px;
        margin-left: 10px;
        transform: translateY(-50%);
    }

    span:nth-child(2) {
        position: absolute;
        top: 50%;
        right: 0%;
        border: 1px solid grey;
        padding-top: 5px;
        transform: translateY(-50%);
        margin-right: 10px;
    }
`;

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
        }
    }

    render () {
        const { index } = this.state;
        const { data } = this.props;

        let currentIndex = index;

        if (currentIndex === -1) { currentIndex = data.length-1; }
        else if (currentIndex === data.length) { currentIndex = 0; };
        
        return (
            <StyledCarousel key={data[currentIndex]} url={data[currentIndex]}>
                <span onClick={() => this.setState({ index: --currentIndex })}><FaAngleLeft size="30px" color="grey" /></span>
                <span onClick={() => this.setState({ index: ++currentIndex })}><FaAngleRight size="30px" color="grey" /></span>
            </StyledCarousel>
        );
    }
}

export default Carousel;
