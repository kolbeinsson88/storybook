import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { object, withKnobs } from '@storybook/addon-knobs';

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
    '500',
];

storiesOf('Histogram', module)
    .addDecorator(withKnobs)
    .addDecorator(story => {
        return (
            <Container>{story()}</Container>
        );
    })
    .add('Histogram', () => {
        return (
            <Histogram
                title="Cars sold"
                numBars={object('numBars', 5)}
                labels={Labels}
            >
                <Bar distribution={object('distributionDiablo', 100)} label="Diablo" />
                <Bar distribution={object('distributionYaris', 220)} label="Toyota Yaris" />
                <Bar distribution={object('distributionRomeo', 420)} label="Alfa Romeo" />
                <Bar distribution={object('distributionBenz', 200)} label="Mercedes Benz 300" />
                <Bar distribution={object('distributionFerrari', 80)} label="Ferrari" />
            </Histogram>
        )
    });
