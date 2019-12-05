import React from 'react';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Carousel from '../components/interfaces/carousel/Carousel';
import Header from '../components/blocks/typography/header';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
    padding: 10px;
    margin: 10px;
`;

const data = [
    'https://images.unsplash.com/photo-1561473940-82e2f2a321ad?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1600',
    'https://images.unsplash.com/photo-1541364208048-4d227de804a4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1600',
    'https://images.unsplash.com/photo-1568355710231-48b7bc6fde12?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1600',
    'https://images.unsplash.com/photo-1562706082-4b637e3b3070?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1600',
];

storiesOf('Carousel', module)
    .addDecorator(withKnobs)
    .add('Carousel', () => {
        return (
            <Wrapper>
                <Header.h1>Carousel</Header.h1>
                <Carousel height={400} width={600} img={data} />
            </Wrapper>
        );
    });
    