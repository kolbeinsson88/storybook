import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import { COLOR } from '../styles/colors';
import Progressbar from '../components/interfaces/progress/progressBar';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

storiesOf('Progress bar', module)
    .addDecorator(story => {
        return (
            <Container>
                <h1>Progress Bar</h1>    
                {story()}
            </Container>
        );
    })
    .add('Progress', () => {
        return (
            <Progressbar
                barBg={COLOR.GREEN_DARK}
                progress={24}
            />
        )
    });

