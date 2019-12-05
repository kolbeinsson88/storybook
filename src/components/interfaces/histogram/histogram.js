import React from 'react';
import styled from 'styled-components';

const HistogramStyled = styled.div`
    width: ${props => props.width}px;
    height: 500px;
    border: 1px solid grey;
    display: flex;
    align-items: flex-end;
`;

const Yscale = styled.div`
    height: 500px;
    width: fit-content;
    display: flex;
    flex-direction: column-reverse;
`;

const StyledSpan = styled.span`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    height: ${props => props.height}px;
    margin-right: 10px;
`;

const Container = styled.div`
    display: flex;
    align-self: center;
 `;

const HistogramContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;
    h2 {
        align-self: center;
    }
`;


const Histogram = ({title, labels, numBars, children}) => {
    return (
        <HistogramContainer>
            <h2>{title}</h2>
            <Container>
                <Yscale>
                    {labels.map(item => <StyledSpan height={((numBars*100) / numBars)}>{item}</StyledSpan>)}
                </Yscale>
                <HistogramStyled width={numBars * 100}>
                    {children}
                </HistogramStyled>
            </Container>
        </HistogramContainer>
    );
}

export default Histogram;