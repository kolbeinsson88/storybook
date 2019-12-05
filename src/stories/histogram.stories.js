import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import Histogram from '../components/interfaces/histogram/histogram';
import Bar from '../components/interfaces/histogram/bar';

const Container = styled.div`
    padding: 10px;
    margin: 10px;
`;

const Labels = [
    '100',
    '200',
    '300',
    '400',
    '500'
];

storiesOf('Histogram', module)
    .addDecorator(story => {
        return (
            <Container>{story()}</Container>
        );
    })
    .add('Histogram', () => {
        return (
            <Histogram
                title="Cars sold"
                numBars={5}
                labels={Labels}
            >
                <Bar distribution={100} label="Diablo" />
                <Bar distribution={380} label="Toyota Yaris" />
                <Bar distribution={480} label="Mercedes Benz 300" />
                <Bar distribution={240} label="Alfa Romeo" />
                <Bar distribution={80} label="Ferrari" />
            </Histogram>
        )
    });
