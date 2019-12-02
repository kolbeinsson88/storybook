import React from 'react';
import styled from 'styled-components';

const StyledCarousel = styled.div`
    border: 1px solid black;
    background-image: url(${props => props.url});
    background-origin: center;
    background-position-y: bottom;
    width: 300px;
    height: 300px;
    position: relative;

    span {
        background-color: 'green';
        color: green;
        cursor: pointer;
        padding: 5px;
        margin-left: 3px;
        color: black;
        font-weight: 700;
        border-radius: 7px;
        padding: 0 20px;
        opacity: 0.3;
    }

    span:nth-child(1) {
        position: absolute;
        top: 50%;
        background-color: white;
    }

    span:nth-child(2) {
        position: absolute;
        top: 50%;
        right: 0%;
        display: flex;
        flex-direction: right;
        background-color: white;
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

        console.log(data);
        
        return (
            <StyledCarousel key={data[currentIndex]} url={data[currentIndex]}>
                <span onClick={() => this.setState({ index: --currentIndex })}>Left</span>
                <span onClick={() => this.setState({ index: ++currentIndex })}>Right</span>
            </StyledCarousel>
        );
    }
}

export default Carousel;
